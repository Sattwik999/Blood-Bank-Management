export function PendingRequests() {
  return (
    <div className="space-y-4">
      {[
        { hospital: "City General Hospital", type: "O-", units: 3, urgency: "High" },
        { hospital: "Memorial Medical Center", type: "AB-", units: 2, urgency: "High" },
        { hospital: "University Hospital", type: "B+", units: 5, urgency: "Medium" },
        { hospital: "St. Mary's Hospital", type: "A+", units: 4, urgency: "Medium" },
        { hospital: "County Medical Center", type: "O+", units: 6, urgency: "Low" },
      ].map((request, index) => (
        <div key={index} className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-3">
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
              className="text-red-600 dark:text-red-400"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{request.hospital}</p>
            <p className="text-xs text-muted-foreground">
              {request.type} • {request.units} units
            </p>
          </div>
          <div
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              request.urgency === "High"
                ? "bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300"
                : request.urgency === "Medium"
                  ? "bg-yellow-50 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300"
                  : "bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300"
            }`}
          >
            {request.urgency}
          </div>
        </div>
      ))}
    </div>
  )
}
