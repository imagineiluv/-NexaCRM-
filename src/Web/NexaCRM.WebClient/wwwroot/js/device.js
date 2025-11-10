window.deviceInfo = {
    isMobile: function () {
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        let isMobileResult;

        if (window.matchMedia && window.matchMedia('(max-width: 767px)').matches) {
            isMobileResult = true;
        } else {
            isMobileResult = /android|iPad|iPhone|iPod/i.test(ua);
        }

        const deviceType = isMobileResult ? 'Mobile' : 'Desktop';
        console.log(`[DeviceInfo] User Agent: ${ua}`);
        console.log(`[DeviceInfo] Detected Device Type: ${deviceType}`);

        return isMobileResult;
    }
};
