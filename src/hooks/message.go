package hooks

import (
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"journiz-server/src/notifications"
)

func messageHooks(app pocketbase.PocketBase) {
	app.OnRecordAfterCreateRequest().Add(func(e *core.RecordCreateEvent) error {
		if e.Record.Collection().Name == "message" {
			var userToNotify string
			if e.Record.GetString("sender") == "team" {
				userToNotify = e.Record.GetString("user")
			} else {
				userToNotify = e.Record.GetString("team")
			}
			notifications.NotifyUser(userToNotify, "Nouveau message de chépaki", e.Record.GetString("content"))
		}
		return nil
	})
}
