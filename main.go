package main

import (
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/plugins/jsvm"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
	"log"
)

func main() {
	app := pocketbase.New()

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
