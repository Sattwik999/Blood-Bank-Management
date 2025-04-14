"use client"

export function BloodTypeChart() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="w-16 text-sm font-medium">A+</div>
        <div className="flex-1">
          <div className="h-2 w-[65%] bg-blue-400 dark:bg-blue-600 rounded-full" />
        </div>
        <div className="w-10 text-right text-sm">65%</div>
      </div>
      <div className="flex items-center">
        <div className="w-16 text-sm font-medium">O+</div>
        <div className="flex-1">
          <div className="h-2 w-[45%] bg-blue-400 dark:bg-blue-600 rounded-full" />
        </div>
        <div className="w-10 text-right text-sm">45%</div>
      </div>
      <div className="flex items-center">
        <div className="w-16 text-sm font-medium">B+</div>
        <div className="flex-1">
          <div className="h-2 w-[30%] bg-blue-400 dark:bg-blue-600 rounded-full" />
        </div>
        <div className="w-10 text-right text-sm">30%</div>
      </div>
      <div className="flex items-center">
        <div className="w-16 text-sm font-medium">AB+</div>
        <div className="flex-1">
          <div className="h-2 w-[25%] bg-blue-400 dark:bg-blue-600 rounded-full" />
        </div>
        <div className="w-10 text-right text-sm">25%</div>
      </div>
      <div className="flex items-center">
        <div className="w-16 text-sm font-medium">O-</div>
        <div className="flex-1">
          <div className="h-2 w-[15%] bg-blue-400 dark:bg-blue-600 rounded-full" />
        </div>
        <div className="w-10 text-right text-sm">15%</div>
      </div>
      <div className="flex items-center">
        <div className="w-16 text-sm font-medium">A-</div>
        <div className="flex-1">
          <div className="h-2 w-[10%] bg-blue-400 dark:bg-blue-600 rounded-full" />
        </div>
        <div className="w-10 text-right text-sm">10%</div>
      </div>
      <div className="flex items-center">
        <div className="w-16 text-sm font-medium">B-</div>
        <div className="flex-1">
          <div className="h-2 w-[5%] bg-blue-400 dark:bg-blue-600 rounded-full" />
        </div>
        <div className="w-10 text-right text-sm">5%</div>
      </div>
      <div className="flex items-center">
        <div className="w-16 text-sm font-medium">AB-</div>
        <div className="flex-1">
          <div className="h-2 w-[5%] bg-blue-400 dark:bg-blue-600 rounded-full" />
        </div>
        <div className="w-10 text-right text-sm">5%</div>
      </div>
    </div>
  )
}
