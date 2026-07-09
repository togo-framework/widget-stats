// Package widgetstats is the "Impact" DRIVER — A KPI row of headline stats.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-stats"
package widgetstats

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "stats",
		Title:       "Impact",
		DefaultZone: "body",
		Asset:       "/widgets/stats.js",
	})
}
