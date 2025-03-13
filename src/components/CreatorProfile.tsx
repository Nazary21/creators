import React, { useState } from 'react';
import { 
  Avatar, 
  Button, 
  Typography, 
  Space, 
  Tag, 
  Tabs, 
  Table,
  Card,
  Descriptions,
  Row,
  Col,
  Divider
} from 'antd';
import { 
  CheckCircleFilled, 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  InstagramOutlined,
  CopyOutlined,
  SearchOutlined,
  PlayCircleOutlined,
  CloseOutlined,
  PlusOutlined
} from '@ant-design/icons';
import { Creator, Message } from '@/data/mockData';
import type { TabsProps } from 'antd';
import Link from 'next/link';

const { Title, Text } = Typography;

interface CreatorProfileProps {
  creator: Creator;
  messages?: Message[];
}

const CreatorProfile: React.FC<CreatorProfileProps> = ({ creator, messages = [] }) => {
  const [activeTab, setActiveTab] = useState<string>('details');
  const [showCrmSidebar, setShowCrmSidebar] = useState<boolean>(false);
  
  // Social performance columns
  const columns = [
    {
      title: 'Social Profiles',
      dataIndex: 'username',
      key: 'username',
      render: (text: string, record: any) => (
        <Space>
          {record.platform === 'instagram' ? <InstagramOutlined /> : 
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 8 }}>
              <path d="M8.54 3.58c.97.29 1.89.78 2.7 1.59.8.8 1.3 1.59 1.7 2.67.27.9.31 1.76.31 2.33 0 .35-.28.64-.64.64h-4.53v3.52c0 .54-.65.82-1.04.44l-4.55-4.43c-.24-.23-.24-.61 0-.85l4.55-4.42c.39-.38 1.04-.1 1.04.44v3.3h2.53c.34 0 .62-.28.62-.61 0-.31-.05-.71-.17-1.13a4.64 4.64 0 00-.8-1.7.56.56 0 01.39-.97z" fill="currentColor"/>
            </svg>
          }
          <a href={record.url} target="_blank" rel="noopener noreferrer">@{text}</a>
        </Space>
      ),
    },
    {
      title: 'Followers',
      dataIndex: 'followers',
      key: 'followers',
      align: 'right' as const,
    },
    {
      title: 'Total Posts',
      dataIndex: 'totalPosts',
      key: 'totalPosts',
      align: 'right' as const,
    },
    {
      title: 'Last post',
      dataIndex: 'lastPost',
      key: 'lastPost',
      align: 'right' as const,
    },
    {
      title: 'Eng. Rate',
      dataIndex: 'engagementRate',
      key: 'engagementRate',
      align: 'right' as const,
      render: (value: number) => `${value.toFixed(1)}`,
    },
    {
      title: 'EMV',
      dataIndex: 'emv',
      key: 'emv',
      align: 'right' as const,
    },
    {
      title: 'Impress',
      dataIndex: 'impressions',
      key: 'impressions',
      align: 'right' as const,
    },
  ];
  
  // Tab items
  const tabItems: TabsProps['items'] = [
    {
      key: 'details',
      label: 'Details',
      children: (
        <div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <Text strong>Default attributes</Text>
              <Button type="text" size="small" icon={<SearchOutlined />}>See all 66</Button>
            </div>
            
            <Descriptions column={{ xs: 1, sm: 1, md: 1 }} bordered={false} size="small">
              <Descriptions.Item 
                label={<Space><EnvironmentOutlined /> Shipping address</Space>}
                labelStyle={{ color: '#666' }}
                contentStyle={{ color: '#333' }}
              >
                <Space>
                  <span>{creator.details.shippingAddress}</span>
                  <Text type="secondary">String</Text>
                </Space>
              </Descriptions.Item>
              
              <Descriptions.Item 
                label={<Space><span>Content Style</span></Space>}
                labelStyle={{ color: '#666' }}
              >
                <Space>
                  <div>
                    {creator.details.contentStyle.map((style, index) => (
                      <Tag key={index} className="mr-1 mb-1">{style}</Tag>
                    ))}
                  </div>
                  <Text type="secondary">Collection</Text>
                </Space>
              </Descriptions.Item>
              
              <Descriptions.Item 
                label={<Space><span>Total followers</span></Space>}
                labelStyle={{ color: '#666' }}
              >
                <Space>
                  <span>{creator.details.totalFollowers}</span>
                  <Text type="secondary">Formula</Text>
                </Space>
              </Descriptions.Item>
              
              <Descriptions.Item 
                label={<Space><span>Languages Spoken</span></Space>}
                labelStyle={{ color: '#666' }}
              >
                <div>
                  {creator.details.languagesSpoken.map((language, index) => (
                    <Tag key={index} className="mr-1 mb-1">{language}</Tag>
                  ))}
                </div>
              </Descriptions.Item>
            </Descriptions>
          </div>
          
          <div className="mb-6">
            <Title level={5} className="mb-4">Social Performance</Title>
            
            <div className="mb-4">
              <Space size="large">
                <Space>
                  <Text strong>All accounts</Text>
                  <Text>{creator.socialPerformance.allAccounts}</Text>
                </Space>
                <Space>
                  <InstagramOutlined />
                  <Text>Instagram {creator.socialPerformance.instagram}</Text>
                </Space>
                <Space>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 4 }}>
                    <path d="M8.54 3.58c.97.29 1.89.78 2.7 1.59.8.8 1.3 1.59 1.7 2.67.27.9.31 1.76.31 2.33 0 .35-.28.64-.64.64h-4.53v3.52c0 .54-.65.82-1.04.44l-4.55-4.43c-.24-.23-.24-.61 0-.85l4.55-4.42c.39-.38 1.04-.1 1.04.44v3.3h2.53c.34 0 .62-.28.62-.61 0-.31-.05-.71-.17-1.13a4.64 4.64 0 00-.8-1.7.56.56 0 01.39-.97z" fill="currentColor"/>
                  </svg>
                  <Text>Tik-Tok {creator.socialPerformance.tiktok}</Text>
                </Space>
                <Space>
                  <PlayCircleOutlined />
                  <Text>Youtube {creator.socialPerformance.youtube}</Text>
                </Space>
              </Space>
            </div>
            
            <Table 
              dataSource={creator.socialProfiles} 
              columns={columns}
              pagination={false}
              size="small"
              rowKey={(record) => record.platform + record.username}
            />
          </div>
          
          <div>
            <Title level={5} className="mb-4">Content</Title>
            <Text>{creator.contentCount} Posts</Text>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              {creator.contentSamples.map((sample) => (
                <div key={sample.id} className="relative">
                  <div className="aspect-square bg-gray-100 rounded-md overflow-hidden relative">
                    {/* Content preview placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {sample.platform === 'instagram' ? (
                        <InstagramOutlined style={{ fontSize: 24, color: '#1677ff' }} />
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.54 3.58c.97.29 1.89.78 2.7 1.59.8.8 1.3 1.59 1.7 2.67.27.9.31 1.76.31 2.33 0 .35-.28.64-.64.64h-4.53v3.52c0 .54-.65.82-1.04.44l-4.55-4.43c-.24-.23-.24-.61 0-.85l4.55-4.42c.39-.38 1.04-.1 1.04.44v3.3h2.53c.34 0 .62-.28.62-.61 0-.31-.05-.71-.17-1.13a4.64 4.64 0 00-.8-1.7.56.56 0 01.39-.97z" fill="#1677ff"/>
                        </svg>
                      )}
                    </div>
                    
                    {/* Platform and followers indicator */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-30">
                      <div className="flex items-center">
                        {sample.platform === 'instagram' ? (
                          <InstagramOutlined style={{ color: 'white', marginRight: 6 }} />
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 6 }}>
                            <path d="M8.54 3.58c.97.29 1.89.78 2.7 1.59.8.8 1.3 1.59 1.7 2.67.27.9.31 1.76.31 2.33 0 .35-.28.64-.64.64h-4.53v3.52c0 .54-.65.82-1.04.44l-4.55-4.43c-.24-.23-.24-.61 0-.85l4.55-4.42c.39-.38 1.04-.1 1.04.44v3.3h2.53c.34 0 .62-.28.62-.61 0-.31-.05-.71-.17-1.13a4.64 4.64 0 00-.8-1.7.56.56 0 01.39-.97z" fill="white"/>
                          </svg>
                        )}
                        <span className="text-xs text-white">{sample.followers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'messages',
      label: 'Messages',
      children: (
        <div>
          {messages.length > 0 ? (
            <div className="space-y-4">
              {messages.map((message) => (
                <Card key={message.id} className="mb-4">
                  <div className="flex items-start">
                    <Avatar size="small" className="mr-3">U</Avatar>
                    <div>
                      <div className="flex items-center mb-1">
                        <Text strong>You</Text>
                        <Text type="secondary" className="ml-2 text-xs">
                          {message.date}
                        </Text>
                      </div>
                      <div>{message.content}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Title level={4}>No messages yet</Title>
              <Text type="secondary">
                Start a conversation with this creator
              </Text>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="flex">
      <div className={`flex-1 transition-all duration-300 ${showCrmSidebar ? 'mr-[350px]' : ''}`}>
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <Avatar 
              size={64} 
              src={creator.profileImage}
              style={{ backgroundColor: '#1677ff' }}
            >
              {creator.name.charAt(0)}
            </Avatar>
            
            <div className="ml-4">
              <div className="flex items-center">
                <Title level={4} style={{ margin: 0 }}>
                  {creator.name}
                </Title>
                {creator.verified && (
                  <CheckCircleFilled className="text-blue-500 ml-2" />
                )}
              </div>
              
              {creator.status && (
                <Tag color="green" className="mt-1">
                  {creator.status}
                </Tag>
              )}
              
              <div className="mt-1">
                <Text type="secondary">Open to cooperation</Text>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              icon={<CopyOutlined />} 
              shape="circle"
            />
            <Button 
              icon={<SearchOutlined />} 
              shape="circle"
            />
            <Button 
              type="primary"
              onClick={() => setShowCrmSidebar(true)}
            >
              Add to CRM
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center">
            <MailOutlined className="text-gray-400 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <div>{creator.email}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <PhoneOutlined className="text-gray-400 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Phone</div>
              <div>{creator.phone} <Tag className="ml-1">+3</Tag></div>
            </div>
          </div>
          
          <div className="flex items-center">
            <EnvironmentOutlined className="text-gray-400 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div>New York</div>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <Space size={8}>
            <Tag color="blue">Label One</Tag>
            <Tag color="blue">+4 tags</Tag>
            <Button size="small" icon={<PlusOutlined />}>New Tag</Button>
          </Space>
        </div>
        
        <Tabs 
          activeKey={activeTab}
          onChange={setActiveTab}
          items={tabItems}
          className="creator-profile-tabs"
        />
      </div>
      
      {/* CRM Sidebar */}
      {showCrmSidebar && (
        <div className="fixed top-0 right-0 w-[350px] h-full bg-white border-l border-gray-200 overflow-y-auto z-10 transition-all duration-300">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <Title level={5} style={{ margin: 0 }}>Manage collaboration</Title>
              <Button 
                type="text" 
                icon={<CloseOutlined />} 
                onClick={() => setShowCrmSidebar(false)}
              />
            </div>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card size="small" className="text-center">
                <div className="font-bold text-lg">2 Campaigns</div>
                <div className="text-gray-500 text-sm">Launched</div>
              </Card>
              
              <Card size="small" className="text-center">
                <div className="font-bold text-lg">456k</div>
                <div className="text-gray-500 text-sm">Clicks</div>
              </Card>
            </div>
            
            <Tabs 
              defaultActiveKey="messages"
              items={[
                {
                  key: 'messages',
                  label: 'Messages',
                  children: (
                    <div className="mt-4">
                      <div className="text-xs text-gray-500 mb-2">5 Mar at 10:34am</div>
                      
                      <div className="mb-6">
                        <div className="flex items-start mb-2">
                          <Avatar size="small" className="mr-2">U</Avatar>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">You <span className="text-gray-400">to {creator.email}</span></div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <p>Hi {creator.name.split(' ')[0]},</p>
                              <p>I hope this message finds you well! I'm reaching out one more time about our collaboration opportunity at [Brand Name].</p>
                              <p>We're big fans of your work and believe your audience would love our [product/service]. This partnership would include:</p>
                              <ul className="list-disc pl-5">
                                <li>[Compensation detail]</li>
                                <li>[Product detail]</li>
                                <li>[Creative freedom detail]</li>
                                <li>[Timeline detail]</li>
                              </ul>
                              <p>We need to finalize our creator roster by [date]. If we don't hear back, we'll assume the timing isn't right, but we'd love to keep you in mind for future opportunities.</p>
                              <p>All the best,<br />Mark</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500 mb-2">1 Mar at 9:00am</div>
                      
                      <div className="mb-6">
                        <div className="flex items-start mb-2">
                          <Avatar size="small" className="mr-2">U</Avatar>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">You <span className="text-gray-400">to Instagram DM</span></div>
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <p>Hi {creator.name.split(' ')[0]},</p>
                              <p>I'm [Your Name] from [Brand Name]. We love your content and would like to discuss a potential collaboration.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="p-3 border border-gray-200 rounded-lg">
                          <p>Hi {creator.name.split(' ')[0]},</p>
                          <p>We're looking for creators like you to help showcase our...</p>
                        </div>
                        <Button 
                          type="primary" 
                          shape="circle" 
                          icon={<span>➤</span>} 
                          size="large"
                          className="absolute bottom-3 right-3"
                        />
                      </div>
                    </div>
                  ),
                },
                {
                  key: 'campaigns',
                  label: 'Campaigns',
                  children: <div className="p-4">Campaign information will appear here</div>,
                },
                {
                  key: 'attributes',
                  label: 'Custom attributes',
                  children: <div className="p-4">Custom attributes will appear here</div>,
                },
                {
                  key: 'notes',
                  label: 'Notes',
                  children: <div className="p-4">Notes will appear here</div>,
                },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatorProfile; 