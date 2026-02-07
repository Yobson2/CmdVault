// MVP Data Models for Student Association Platform

export interface Admin {
  id: string
  email: string
  fullName: string
  createdAt: Date
  updatedAt: Date
}

export interface MembershipRequest {
  id: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  studentId?: string
  program?: string
  yearOfStudy?: string
  motivation?: string
  status: 'pending' | 'accepted' | 'rejected'
  processedBy?: string
  processedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Report {
  id: string
  title: string
  description: string
  category?: string
  status: 'new' | 'in_progress' | 'resolved'
  priority: 'low' | 'medium' | 'high'
  createdBy: string
  assignedTo?: string
  createdAt: Date
  updatedAt: Date
  resolvedAt?: Date
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject?: string
  message: string
  isRead: boolean
  createdAt: Date
}

export interface DashboardStats {
  totalMembershipRequests: number
  pendingRequests: number
  acceptedRequests: number
  rejectedRequests: number
  totalReports: number
  newReports: number
  inProgressReports: number
  resolvedReports: number
}
