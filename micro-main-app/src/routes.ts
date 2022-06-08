import Stories from './pages/stories';
import Xiaoshuo from './pages/xiaoshuo';

export const routes = [
    {
        key: 'stories',
        name: '故事汇',
        path: '/stories',
        component: Stories,
    },
    {
        key: 'xiaoshuo',
        name: '小说集',
        path: '/xiaoshuo',
        component: Xiaoshuo,
    },
];