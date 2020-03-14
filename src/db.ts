export const messages = [
  {
    id: '1',
    content: 'Hey man, you are late',
    createdAt: new Date(Date.now() - 60 *1000 *1000),
  },
  {
    id: '2',
    content: 'Ok, I\'ll be there in 20 minutes',
    createdAt: new Date(Date.now() - 2 * 60 *1000 *1000),
  },
  {
    id: '3',
    content: 'I wanna try something new',
    createdAt: new Date(Date.now() - 24 * 60 *1000 *1000),
  },
  {
    id: '4',
    content: 'This video is very funny',
    createdAt: new Date(Date.now() - 14 * 24 * 60 *1000 *1000),
  },
];

export const chats = [
  {
    id: '1',
    name: 'Adam Clark',
    picture: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
    lastMessage: messages.find(m => m.id === '1'),
  },
  {
    id: '2',
    name: 'Bob James',
    picture: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
    lastMessage: messages.find(m => m.id === '2'),
  },
  {
    id: '3',
    name: 'Martha Ford',
    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
    lastMessage: messages.find(m => m.id === '3'),
  },
  {
    id: '4',
    name: 'Molly Banks',
    picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
    lastMessage: messages.find(m => m.id === '4'),
  },
]