import React from 'react'
import { CardTitle } from '@/components/ui/card'
import {
  FileText,
  Clock,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  AlertCircle,
} from 'lucide-react'

// Define color scheme similar to MessageManagerDemo
const colorMap = {
  neutral: { background: '#dbeafe', color: '#2563eb' },
  income: { background: '#dcfce7', color: '#16a34a' },
  expense: { background: '#fee2e2', color: '#dc2626' },
  warning: { background: '#fef3c7', color: '#d97706' },
  info: { background: '#f3e8ff', color: '#9333ea' },
}

// Mock invoice data
const invoiceData = {
  totalIncome: '184,230.50',
  totalExpenses: '96,450.75',
  pendingInvoices: '32,780.00',
  overdueInvoices: '8,540.20',
  recentTransactions: [
    {
      id: 'INV-1234',
      client: 'TechPro Solutions',
      amount: '12,450',
      status: 'paid',
      date: 'Today',
    },
    {
      id: 'INV-1233',
      client: 'GlobalShip Inc.',
      amount: '8,970',
      status: 'pending',
      date: 'Yesterday',
    },
    { id: 'INV-1232', client: 'GreenGrocers', amount: '4,320', status: 'overdue', date: '3d ago' },
  ],
  monthlyCashflow: [
    { month: 'Jan', income: 54000, expenses: 32000 },
    { month: 'Feb', income: 58000, expenses: 35000 },
    { month: 'Mar', income: 62000, expenses: 40000 },
    { month: 'Apr', income: 68000, expenses: 42000 },
    { month: 'May', income: 72000, expenses: 45000 },
  ],
}

export const InvoiceCreatorDemo: React.FC<{ id: string }> = () => {
  return (
    <div className='bg-background rounded-xl p-4 border border-border'>
      <CardTitle className='mb-4 text-xl'>Invoice Dashboard</CardTitle>

      <div className='grid sm:grid-cols-2 gap-3 mb-4'>
        {/* Income Summary Card */}
        <div className='bg-muted rounded-lg border border-border p-3'>
          <div className='flex items-center justify-between mb-1'>
            <div className='flex items-center gap-2'>
              <div
                className='rounded-sm flex items-center justify-center p-1.5'
                style={{ backgroundColor: colorMap.income.background }}
              >
                <TrendingUp className='h-4 w-4' style={{ color: colorMap.income.color }} />
              </div>
              <span className='font-medium text-sm'>Income</span>
            </div>
            <ArrowUpRight className='h-4 w-4 text-green-500' />
          </div>
          <div className='flex items-baseline'>
            <span className='text-lg font-bold'>{invoiceData.totalIncome} €</span>
            <span className='text-xs text-green-500 ml-1'>+12%</span>
          </div>
        </div>

        {/* Expenses Summary Card */}
        <div className='bg-muted rounded-lg border border-border p-3'>
          <div className='flex items-center justify-between mb-1'>
            <div className='flex items-center gap-2'>
              <div
                className='rounded-sm flex items-center justify-center p-1.5'
                style={{ backgroundColor: colorMap.expense.background }}
              >
                <TrendingDown className='h-4 w-4' style={{ color: colorMap.expense.color }} />
              </div>
              <span className='font-medium text-sm'>Expenses</span>
            </div>
            <ArrowDownRight className='h-4 w-4 text-red-500' />
          </div>
          <div className='flex items-baseline'>
            <span className='text-lg font-bold'>{invoiceData.totalExpenses} €</span>
            <span className='text-xs text-red-500 ml-1'>+7%</span>
          </div>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 gap-3 mb-4'>
        {/* Pending Invoices Card */}
        <div className='bg-muted rounded-lg border border-border p-3'>
          <div className='flex items-center justify-between mb-1'>
            <div className='flex items-center gap-2'>
              <div
                className='rounded-sm flex items-center justify-center p-1.5'
                style={{ backgroundColor: colorMap.warning.background }}
              >
                <Clock className='h-4 w-4' style={{ color: colorMap.warning.color }} />
              </div>
              <span className='font-medium text-sm'>Pending</span>
            </div>
          </div>
          <div className='flex items-baseline'>
            <span className='text-lg font-bold'>{invoiceData.pendingInvoices} €</span>
            <span className='text-xs text-gray-500 ml-1'>5 inv</span>
          </div>
        </div>

        {/* Overdue Invoices Card */}
        <div className='bg-muted rounded-lg border border-border p-3'>
          <div className='flex items-center justify-between mb-1'>
            <div className='flex items-center gap-2'>
              <div
                className='rounded-sm flex items-center justify-center p-1.5'
                style={{ backgroundColor: colorMap.expense.background }}
              >
                <AlertCircle className='h-4 w-4' style={{ color: colorMap.expense.color }} />
              </div>
              <span className='font-medium text-sm'>Overdue</span>
            </div>
          </div>
          <div className='flex items-baseline'>
            <span className='text-lg font-bold'>{invoiceData.overdueInvoices} €</span>
            <span className='text-xs text-red-500 ml-1'>2 inv</span>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className='bg-muted rounded-lg border border-border p-3'>
        <div className='flex items-center justify-between mb-2'>
          <div className='flex items-center gap-2'>
            <div
              className='rounded-sm flex items-center justify-center p-1.5'
              style={{ backgroundColor: colorMap.neutral.background }}
            >
              <FileText className='h-4 w-4' style={{ color: colorMap.neutral.color }} />
            </div>
            <span className='font-medium text-sm'>Recent Transactions</span>
          </div>
          <span className='text-xs text-blue-600 underline cursor-pointer'>All</span>
        </div>

        <div className='grid grid-cols-1 gap-2'>
          {invoiceData.recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className='flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0'
            >
              <div className='min-w-0 pr-2'>
                <div className='font-medium text-sm truncate'>{transaction.client}</div>
                <div className='text-xs text-gray-500 truncate'>
                  {transaction.id} • {transaction.date}
                </div>
              </div>
              <div className='flex items-center gap-3 flex-shrink-0'>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    transaction.status === 'paid'
                      ? 'bg-green-100 text-green-700'
                      : transaction.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {transaction.status}
                </span>
                <span className='font-medium whitespace-nowrap'>{transaction.amount}€</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
