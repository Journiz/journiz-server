package main

import (
	"github.com/joho/godotenv"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/plugins/jsvm"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
	"journiz-server/src/hooks"
	"journiz-server/src/scheduled"
	"log"
)

func main() {
	// Load env file if any
	if err := godotenv.Load(); err != nil {
		print("WARN: No env file found.")
	}

	// Pocketbase hooks
	config := pocketbase.Config{
		DefaultDebug: false,
	}
	app := pocketbase.NewWithConfig(&config)

	hooks.SetupHooks(*app)
	scheduled.SetupScheduled(*app)

	// Pocketbase configuration
	jsvm.MustRegisterMigrations(app, &jsvm.MigrationsOptions{
		Dir: "pb_migrations",
	})
	migratecmd.MustRegister(app, app.RootCmd, &migratecmd.Options{
		Automigrate:  true, // auto creates migration files when making collection changes
		TemplateLang: "js",
		Dir:          "pb_migrations",
	})

	// Run Pocketbase
	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
