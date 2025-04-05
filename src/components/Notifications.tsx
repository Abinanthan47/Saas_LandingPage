import { TiltedScroll } from "@/components/ui/tilted-scroll"

export function NotificationsBg() {
  const customItems = [
    { id: "1", text: "Feature One" },
    { id: "2", text: "Feature Two" },
    { id: "3", text: "Feature Three" },
    { id: "4", text: "Feature Four" },
    { id: "5", text: "Feature Five" },
  ]

  return (
    <div className="space-y-8">
      <TiltedScroll 
        items={customItems}
        className="mt-8"
      />
    </div>
  )
}