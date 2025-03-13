'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Button, Typography, Tabs, Spin, Badge, Statistic, Space, Tag, Avatar } from 'antd';
import { ArrowLeftOutlined, CheckCircleFilled, MessageOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { creators, messages } from '@/data/mockData';
import Sidebar from '@/components/Sidebar';
import CreatorProfile from '@/components/CreatorProfile';

const { Title, Text } = Typography;

export default function ProfileCRMPage() {
  const params = useParams();
  const id = params.id as string;
  
  // Find the creator by ID
  const creator = creators.find(c => c.id === id);
  
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
              <div className="flex">
                {/* Creator profile */}
                <div className="flex-1">
                  <CreatorProfile creator={creator} messages={creatorMessages} />
                </div>
                
                {/* CRM Sidebar */}
                <div className="w-72 ml-4 bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <Title level={5}>Manage collaboration</Title>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between mb-6">
                      <div>
                        <Text type="secondary">2 Campaigns</Text>
                        <div className="text-sm text-gray-800">Launched</div>
                      </div>
                      <div className="text-right">
                        <Text type="secondary">456k</Text>
                        <div className="text-sm text-gray-800">Clicks</div>
                      </div>
                    </div>
                    
                    <Tabs 
                      defaultActiveKey="messages"
                      items={[
                        {
                          key: 'messages',
                          label: 'Messages',
                          children: (
                            <div className="pt-4">
                              {messages.map((message) => (
                                <div key={message.id} className="mb-6">
                                  <div className="flex items-center justify-between mb-2">
                                    <Text type="secondary">{message.date}</Text>
                                    <Text type="secondary">{message.destination}</Text>
                                  </div>
                                  
                                  <div className="mb-2">
                                    <Text strong>You</Text>
                                  </div>
                                  
                                  <div className="whitespace-pre-line text-sm">
                                    {message.content}
                                  </div>
                                </div>
                              ))}
                              
                              <div className="mt-6 relative">
                                <textarea 
                                  placeholder="Type your message..." 
                                  className="w-full border border-gray-300 rounded-lg p-3 pr-10 min-h-[80px] resize-none"
                                />
                                <Button 
                                  type="primary" 
                                  shape="circle" 
                                  icon={<MessageOutlined />} 
                                  className="absolute bottom-3 right-3"
                                />
                              </div>
                            </div>
                          )
                        },
                        {
                          key: 'campaigns',
                          label: 'Campaigns',
                          children: <div className="p-4">Campaign information will appear here</div>
                        },
                        {
                          key: 'attributes',
                          label: 'Custom attributes',
                          children: <div className="p-4">Custom attribute information will appear here</div>
                        },
                        {
                          key: 'notes',
                          label: 'Notes',
                          children: <div className="p-4">Notes will appear here</div>
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Spin size="large" className="mb-4" />
                <Title level={4}>Loading creator profile...</Title>
                <Text type="secondary">
                  If the profile doesn't load, the creator might not exist.
                </Text>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 