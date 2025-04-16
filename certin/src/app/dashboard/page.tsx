export default function DashboardPage() {
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <div className='bg-muted/50 aspect-video rounded-xl' />
        <div className='bg-muted/50 aspect-video rounded-xl' />
        <div className='bg-muted/50 aspect-video rounded-xl' />
      </div>
      <div className='bg-muted/50 min-h-[50vh] flex-1 rounded-xl md:min-h-min' />
    </div>
  )
}
