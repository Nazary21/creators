'use client';

import React from 'react';
import { Typography, Card, Table, Tag, Button, Space } from 'antd';
import { PlusOutlined, FileOutlined } from '@ant-design/icons';
import Sidebar from '@/components/Sidebar';

const { Title, Text } = Typography;

export default function CampaignsPage() {
  // Sample campaign data
  const campaigns = [
    {
      id: '1',
      name: 'Summer Collection Launch',
      status: 'Active',
      creators: 8,
      budget: '$15,000',
      startDate: '2023-06-01',
      endDate: '2023-07-15',
    },
    {
      id: '2',
      name: 'Holiday Special Promotion',
      status: 'Draft',
      creators: 12,
      budget: '$25,000',
      startDate: '2023-11-15',
      endDate: '2023-12-31',
    },
    {
      id: '3',
      name: 'Product Announcement',
      status: 'Completed',
      creators: 5,
      budget: '$8,000',
      startDate: '2023-04-10',
      endDate: '2023-05-10',
    },
    {
      id: '4',
      name: 'Brand Awareness Campaign',
      status: 'Planned',
      creators: 15,
      budget: '$30,000',
      startDate: '2023-08-01',
      endDate: '2023-10-31',
    },
  ];

  // Table columns
  const columns = [
    {
      title: 'Campaign Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => (
        <Space>
          <FileOutlined />
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'default';
        if (status === 'Active') color = 'green';
        if (status === 'Draft') color = 'blue';
        if (status === 'Completed') color = 'gray';
        if (status === 'Planned') color = 'orange';
        
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Creators',
      dataIndex: 'creators',
      key: 'creators',
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button type="link" size="small">View</Button>
      ),
    },
  ];

  return (
    <div className="app-layout">
      {/* Navigation sidebar */}
      <Sidebar activeKey="campaigns" />
      
      {/* Main content */}
      <div className="main-content-no-filter">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <Title level={3}>Campaigns</Title>
              <Text type="secondary">Manage your marketing campaigns and collaborations</Text>
            </div>
            <Button type="primary" icon={<PlusOutlined />}>
              New Campaign
            </Button>
          </div>

          <Card>
            <Table 
              dataSource={campaigns} 
              columns={columns} 
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
} 