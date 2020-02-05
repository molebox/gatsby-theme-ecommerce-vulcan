import React from 'react';
import { ToastProvider } from 'react-toast-notifications'

export const wrapRootElement = ({ element }) => (
    <ToastProvider>{element}</ToastProvider>
  )