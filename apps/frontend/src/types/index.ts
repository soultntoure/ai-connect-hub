export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Solution {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  price: string;
  imageUrl?: string;
  developerInfo?: string;
}

export interface Integration {
  id: string;
  userId: string;
  solutionId: string;
  solutionName: string;
  status: 'Active' | 'Inactive' | 'Pending';
  configuration: Record<string, any>; // Flexible configuration settings
  activatedAt: Date;
  lastUsedAt?: Date;
}
