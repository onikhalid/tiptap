import React from 'react'
import { AuthProvider } from './userAuthContext'
import { CloudinaryLoadingProvider } from './CloudinaryProvider'




const AllProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <CloudinaryLoadingProvider>
                {children}
            </CloudinaryLoadingProvider>
        </AuthProvider>
    )
}

export default AllProviders