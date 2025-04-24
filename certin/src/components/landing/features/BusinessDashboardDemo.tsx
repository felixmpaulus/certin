import React from 'react'
import { ChevronRight, BarChart, Star, DollarSign, Calendar } from 'lucide-react'
import { CardTitle } from '@/components/ui/card'

export const BusinessDashboardDemo: React.FC<{ id: string }> = () => {
  return (
    <div className='bg-background rounded-xl p-4 border border-border aspect-video'>
      <div className='flex justify-between items-center mb-3'>
        <CardTitle className='text-lg'>Your Business Intelligence Insights</CardTitle>
      </div>

      {/* AI Insight Card - Main Feature */}
      <div className='bg-gradient-to-r from-violet-50 to-indigo-50 rounded-lg border border-violet-200 p-3 mb-3'>
        <div className='flex items-center mb-2'>
          <div className='p-1.5 rounded-full bg-violet-100 mr-2'>
            <Star className='h-4 w-4 text-violet-700' />
          </div>
          <h3 className='font-semibold text-sm text-violet-900'>Priority Insight</h3>
        </div>

        <p className='text-sm text-gray-700 mb-2'>
          <span className='font-medium'>Customer retention opportunity:</span> 15 high-value
          customers have reduced order frequency in the last 30 days. Proactive engagement could
          recover €32,500 in quarterly revenue.
        </p>

        <div className='flex items-center gap-2 mb-2'>
          <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
            <div className='h-full bg-violet-500 rounded-full' style={{ width: '82%' }}></div>
          </div>
          <span className='text-xs font-medium text-violet-700 whitespace-nowrap'>High impact</span>
        </div>

        <div className='flex justify-end'>
          <button className='text-xs text-violet-700 font-medium px-2 py-1 bg-white rounded-md border border-violet-200 flex items-center'>
            View customer list <ChevronRight className='h-3 w-3 ml-0.5' />
          </button>
        </div>
      </div>

      {/* Two Column Data Highlights with Context */}
      <div className='grid grid-cols-2 gap-2 mb-3'>
        <div className='bg-white rounded-lg border border-gray-200 p-2.5'>
          <div className='flex items-center gap-1.5 mb-1.5'>
            <div className='p-1 rounded-full bg-green-100'>
              <DollarSign className='h-3.5 w-3.5 text-green-700' />
            </div>
            <span className='text-xs font-medium text-gray-700'>Cash Flow Forecast</span>
          </div>

          <div className='flex items-baseline gap-2'>
            <div className='text-lg font-bold text-gray-900'>+16%</div>
            <div className='text-xs text-gray-500'>Next Q</div>
          </div>

          <p className='text-xs text-gray-600 mt-1'>
            Accelerated invoice payments will improve liquidity
          </p>
        </div>

        <div className='bg-white rounded-lg border border-gray-200 p-2.5'>
          <div className='flex items-center gap-1.5 mb-1.5'>
            <div className='p-1 rounded-full bg-blue-100'>
              <Calendar className='h-3.5 w-3.5 text-blue-700' />
            </div>
            <span className='text-xs font-medium text-gray-700'>Seasonal Planning</span>
          </div>

          <div className='flex items-baseline gap-2'>
            <div className='text-lg font-bold text-gray-900'>+21%</div>
            <div className='text-xs text-gray-500'>Demand</div>
          </div>

          <p className='text-xs text-gray-600 mt-1'>
            Increase capacity by Oct 15 to capture opportunity
          </p>
        </div>
      </div>

      {/* Smart Recommendation - actionable insight */}
      <div className='bg-white rounded-lg border border-gray-200 p-3'>
        <div className='flex gap-3'>
          <div className='p-1.5 rounded-full bg-blue-100 h-fit mt-0.5'>
            <BarChart className='h-4 w-4 text-blue-700' />
          </div>

          <div>
            <h3 className='font-medium text-sm text-gray-700 mb-1'>Cost Optimization Found</h3>
            <p className='text-xs text-gray-700 mb-2'>
              Analyzing your fuel consumption patterns reveals potential for 8.4% cost reduction
              (€24,300 annually) by optimizing vehicle maintenance schedules.
            </p>

            <div className='flex gap-2'>
              <button className='text-xs bg-white px-2 py-1 rounded-md border border-blue-200 text-blue-700'>
                View analysis
              </button>
              <button className='text-xs underline text-blue-700'>Apply changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
