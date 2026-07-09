import React from 'react';
import GrandOpeningForm from '../components/GrandOpeningForm';

const GrandOpeningPage = () => {
    return (
        <div className="pt-16 min-h-screen bg-ivory">
            {/* The form already has a nice padding, but we add pt-16 to push it below the navbar */}
            <GrandOpeningForm />
        </div>
    );
};

export default GrandOpeningPage;
