import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        // Redirect to WhatsApp immediately
        window.location.href = 'https://wa.me/919972816108';
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    Redirecting to WhatsApp...
                </h2>
                <p className="text-gray-600">
                    Connecting you to Mantra Miles on WhatsApp
                </p>
            </div>
        </div>
    );
}