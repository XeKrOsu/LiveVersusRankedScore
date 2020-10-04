fetch("https://osu.ppy.sh/oauth/token", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "grant_type": "authorization_code",
        "client_id": 2915,
        "client_secret": "nYVXiPwTgNSBi3Pmenk4fihJojdpApCczkqgWyUg",
        "redirect_uri": "https://xekrosu.github.io/LiveVersusRankedScore/",
        "code": "def50200d07f696b5f4bd39d6f0fb2011327cb14cbe48fe24d2d2d5c431689f1bc1bd68ec3f9d61d77cbed325154a6daaef26b0c7f1ef8ccd3023cd74bcfc63e71fce03bedcafe085a472efd0f3bb63752ca62bfcd7cf6689c0d8a258cd2f41f0f21111b2e68f2303c8d531678f41242cca8890f25f81852f754359d1941aa6ee3f1683a5af1998f304b24878beb18c3d2dfb39029278b16f8a0571f449cc40e9776a99fd5b5fad3be3d7c44d9f39cfef341a79281e4fec8c5f86776958f72d8c44df90a516b0b4540ca5a36e334a5cae8381a0adf29ac1eab7f98e0761e2db8985fd4e53b074ccea68b4f26a1556dab5f952c7029182a4b9073df14823a781e781ae1280cee423c8d02a9ec2b6a819cd7e78e09981f6a463670b96917f345e7a69c3af60513ce06cc258fe26a1353caea6c75674e4b21726b587c2eb17503f280cd7d6b0d14db28d88fb952824df3683d828d230572c51c1fe194788d96357167ca50a20c7325c795e29d00cded4941bf9d7112cf270271e00873ff4cf09dc43adc5dc29a81c4a72e91ea36222c"
    })
})
.then(response => {
    return response.json();
});