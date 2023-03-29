package notifications

import (
	"fmt"
	"github.com/monaco-io/request"
	"log"
	"os"
)

func NotifyUser(userId string, title string, content string) {
	var appId = os.Getenv("ONESIGNAL_APP_ID")
	var apiKey = os.Getenv("ONESIGNAL_API_KEY")

	var result interface{}

	var c = request.Client{
		URL:    "https://onesignal.com/api/v1/notifications",
		Method: "POST",
		JSON: fmt.Sprintf(`{
  "app_id": "%s",
  "include_external_user_ids": [
    "%s"
  ],
"headings": {
	"en": "%s"
},
  "contents": {
    "en": "%s"
  }
}`, appId, userId, title, content),
		Header: map[string]string{"Authorization": "Basic " + apiKey},
	}
	resp := c.Send().Scan(&result)
	if !resp.OK() {
		// handle error
		log.Println(resp.Error())
	}

	str := resp.String()
	log.Println("Basic " + os.Getenv("ONESIGNAL_API_KEY"))
	log.Println(result)
	log.Println(resp)
	log.Println(str)
}
