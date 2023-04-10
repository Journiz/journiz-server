package main

import (
	"github.com/joho/godotenv"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/plugins/jsvm"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
	"journiz-server/src/hooks"
	"journiz-server/src/notifications"
	"log"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		print("WARN: No env file found.")
	}

	notifications.NotifyUser("cw00ciyy1pgmger", "Équipe 1", `Bonjour "mike" heh`)

	app := pocketbase.New()
	hooks.SetupHooks(*app)

	jsvm.MustRegisterMigrations(app, &jsvm.MigrationsOptions{
		Dir: "pb_migrations",
	})
	migratecmd.MustRegister(app, app.RootCmd, &migratecmd.Options{
		Automigrate:  true, // auto creates migration files when making collection changes
		TemplateLang: "js",
		Dir:          "pb_migrations",
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
