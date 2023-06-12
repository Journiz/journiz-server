package scheduled

import (
	"fmt"
	"github.com/pocketbase/pocketbase"
	"time"
)

func SetupScheduled(app pocketbase.PocketBase) {
	ticker := time.NewTicker(time.Second)
	done := make(chan bool)
	go func() {
		for {
			select {
			case <-done:
				return
			case t := <-ticker.C:
				// Get all trips from pocketbase database
				trips, err := app.Dao().FindRecordsByExpr("trip", nil)
				if err != nil {
					fmt.Println("Error while getting trips: ", err.Error())
				} else {
					// For each trip
					for _, trip := range trips {
						// If trip is playing
						if trip.GetString("status") == "playing" {
							// Get trip date
							tripDate := trip.GetDateTime("date").Time()

							// Get trip duration
							tripDuration := trip.GetFloat("duration")
							// Get current time
							currentTime := t
							// If current time is greater than trip date + trip duration
							if currentTime.After(tripDate.Add(time.Duration(tripDuration) * time.Minute)) {
								// Set trip status to finishing
								trip.Set("status", "finishing")
								// Save trip
								err := app.Dao().SaveRecord(trip)
								if err != nil {
									fmt.Println("Error while saving trip: ", err.Error())
								}
							}
						}
					}
				}
			}
		}
	}()
}
