'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Users from '@/app/components/Users';

const App = () =>  {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <div>
        <QueryClientProvider client={queryClient}>
            <Users/>
        </QueryClientProvider>
        </div>
    );
}

export default App;