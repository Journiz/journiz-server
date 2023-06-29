package hooks

import (
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"journiz-server/src/notifications"
)

func answerHooks(app pocketbase.PocketBase) {
	app.OnRecordAfterCreateRequest().Add(func(e *core.RecordCreateEvent) error {
		if e.Record.Collection().Name == "answer" {
			if !e.Record.GetBool("hasBeenValidated") {
				teamToUser, err := app.Dao().FindRecordById("team_to_user", e.Record.GetString("team"))
				if err != nil {
					return err
				}
				notifications.NotifyUser(
					teamToUser.GetString("user"),
					"Nouvelle réponse à valider",
					"Une nouvelle réponse est en attente de validation",
					map[string]string{"event": "userNewValidation"},
				)

			}
		}
		return nil
	})
}
