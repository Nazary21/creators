/* eslint-disable @typescript-eslint/no-unused-vars, react/no-unescaped-entities */
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Button, Typography, Tabs, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { expandedCreators, messages } from '@/data/mockData';
import Sidebar from '@/components/Sidebar';
import CreatorProfile from '@/components/CreatorProfile';

const { Title, Text } = Typography;

export default function ProfilePage() {
  const params = useParams();
  const id = params.id as string;
  
  // Find the creator by ID
  const creator = expandedCreators.find(c => c.id === id);
  
  // Find messages for this creator
  const creatorMessages = messages.filter(m => m.id.startsWith('m'));
  
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[60px] md:w-[240px]">
        <Sidebar />
      </div>
      
      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center mb-4 text-gray-600 hover:text-blue-600">
              <ArrowLeftOutlined style={{ marginRight: 8 }} />
              Back to search
            </Link>
            
            {creator ? (
              <CreatorProfile creator={creator} messages={creatorMessages} />
            ) : (
              <div className="text-center py-12">
                <Spin size="large" className="mb-4" />
                <Title level={4}>Loading creator profile...</Title>
                <Text type="secondary">
                  If the profile doesn&apos;t load, the creator might not exist.
                </Text>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 