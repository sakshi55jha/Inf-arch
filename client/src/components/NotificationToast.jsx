import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function NotificationToast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        background: isSuccess ? '#13281c' : '#2d1414',
        border: `1px solid ${isSuccess ? '#10b981' : '#ef4444'}`,
        color: '#ffffff',
        padding: '1rem 1.4rem',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        maxWidth: '420px',
        animation: 'slideUp 0.3s ease forwards',
      }}
    >
      {isSuccess ? (
        <CheckCircle2 size={24} color="#10b981" style={{ flexShrink: 0 }} />
      ) : (
        <AlertCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} />
      )}
      <div style={{ flex: 1, fontSize: '0.92rem', lineHeight: '1.4' }}>
        <strong>{isSuccess ? 'Success' : 'Notice'}:</strong> {toast.message}
      </div>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#94a3b8',
          cursor: 'pointer',
          padding: '0.2rem',
        }}
      >
        <X size={18} />
      </button>
    </div>
  );
}
