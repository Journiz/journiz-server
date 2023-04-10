package hooks

import "github.com/pocketbase/pocketbase"

func SetupHooks(app pocketbase.PocketBase) {
	tripHooks(app)
	teamHooks(app)
}
