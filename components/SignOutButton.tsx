'use client';

import { useClerk } from '@clerk/nextjs';

export const SignOutButton = () => {
    const { signOut } = useClerk();

    return (
        // Clicking this button signs out a user
        // and redirects them to the "/admin" page.
        <button
            onClick={() => {
                console.log('clicked');
                signOut({ redirectUrl: '/' }); // No need for `return` here
            }}
        >
            Sign out
        </button>
    );
};
