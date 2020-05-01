export default function ({params, route, redirect}) {
    // hypothetical set of all supported locales
    if (route.path.includes("/users")) {
        redirect('301', '/digital-identity-for-users');
    }else if (route.path.includes("/business")) {
        redirect('301', '/KYC-ID-verification-business');
    }else if (route.path === "/") {
        redirect('301', '/KYC-ID-verification-business');
    }
    
}