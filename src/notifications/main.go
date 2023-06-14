package notifications

import (
	"encoding/json"
	"fmt"
	"github.com/monaco-io/request"
	"log"
	"os"
	"strings"
)

func NotifyUser(userId string, title string, content string, data map[string]string) {
	var appId = os.Getenv("ONESIGNAL_APP_ID")
	var apiKey = os.Getenv("ONESIGNAL_API_KEY")

	var result interface{}

	jsonData, _ := json.Marshal(data)
	jsonPayload := fmt.Sprintf(`{
  "app_id": "%s",
  "include_external_user_ids": [
    "%s"
  ],
	"headings": {
		"en": "%s"
	},
  "contents": {
    "en": "%s"
  },
  "data": %s
}`,
		appId,
		userId,
		strings.Replace(title, `"`, `\"`, -1),
		strings.Replace(content, `"`, `\"`, -1),
		jsonData,
	)
	var c = request.Client{
		URL:    "https://onesignal.com/api/v1/notifications",
		Method: "POST",
		JSON:   jsonPayload,
		Header: map[string]string{"Authorization": "Basic " + apiKey},
	}
	resp := c.Send().Scan(&result)
	if !resp.OK() {
		// handle error
		log.Println(resp.Error())
	}

	str := resp.String()
	log.Println(result)
	log.Println(resp)
	log.Println(str)
}
