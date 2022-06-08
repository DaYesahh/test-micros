import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import BookTypeList from './pages/bookTypeList';
import FunctionList from './pages/functionList';
console.log((window as any).__POWERED_BY_QIANKUN__ ? '/son1' : '/');
function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="*" element={<FunctionList />} />
                <Route path="/test" element={<BookTypeList />} />
            </Routes>
        </HashRouter>
    );
}

export default Router;
