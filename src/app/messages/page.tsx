'use client';

import React from 'react';
import { Typography, Card, List, Avatar, Badge } from 'antd';
import { creators, messages } from '@/data/mockData';
import Sidebar from '@/components/Sidebar';

const { Title, Text } = Typography;

export default function MessagesPage() {
  return (
    <div className="app-layout">
      {/* Navigation sidebar */}
      <Sidebar activeKey="messages" />
      
      {/* Main content */}
      <div className="main-content-no-filter">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Title level={3}>Messages</Title>
            <Text type="secondary">Communicate with creators and manage your conversations</Text>
          </div>

          <Card>
            <List
              itemLayout="horizontal"
              dataSource={creators}
              renderItem={(creator) => (
                <List.Item
                  actions={[
                    <Text key="time" type="secondary">5m ago</Text>
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Badge dot={creator.id === '4'}>
                        <Avatar src={creator.profileImage}>{creator.name.charAt(0)}</Avatar>
                      </Badge>
                    }
                    title={
                      <div className="flex items-center">
                        <span>{creator.name}</span>
                        {creator.id === '4' && <Badge count="New" style={{ marginLeft: 8 }} />}
                      </div>
                    }
                    description={
                      <Text ellipsis style={{ maxWidth: 500 }}>
                        {messages.find(m => m.id === 'm1')?.content.substring(0, 100)}...
                      </Text>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </div>
    </div>
  );
} 