export function RecentDonations() {
  return (
    <div className="space-y-4">
      {[
        { name: "John Smith", date: "Today, 10:30 AM", type: "A+" },
        { name: "Sarah Johnson", date: "Today, 9:15 AM", type: "O-" },
        { name: "Michael Brown", date: "Yesterday, 4:45 PM", type: "B+" },
        { name: "Emily Davis", date: "Yesterday, 2:30 PM", type: "AB+" },
        { name: "Robert Wilson", date: "Yesterday, 11:20 AM", type: "O+" },
      ].map((donor, index) => (
        <div key={index} className="flex items-center group">
          <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600 dark:text-blue-400"
            >
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{donor.name}</p>
            <p className="text-xs text-muted-foreground">{donor.date}</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full px-2 py-1 text-xs font-medium">
            {donor.type}
          </div>
        </div>
      ))}
    </div>
  )
}
