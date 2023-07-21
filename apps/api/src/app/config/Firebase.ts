import * as admin from 'firebase-admin';

export class Firebase {
  public initialize(): void {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: 'test-pg-99e5f',
        clientEmail:
          'firebase-adminsdk-5pa1v@test-pg-99e5f.iam.gserviceaccount.com',
        privateKey:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDRMbmkoFLPsHtK\nquLBwymMybwUHN+ktPQOAFRPe1MbPWGO9HPcQZqOgA2klovyVLa+8nO3sFo5c5a+\nz0r5jgWu71TwYY/GLk3tMcfAVZ64eQP1QDB2HVP8QLhZSJshe6mgeo/L16pp9VDw\naYcotRWj3+WAnbK7NR7SOZakQY0f0TNFGg8TMaBlke2uWGmqlmo4s/WV5Wiz3Lrb\nvgiQLL/Gy+Kq37A5M5c/CbEsh6yQ21mj8FmGsqu2pj3AHlmcpfR5h85gnYWj37bD\n10rbgDbc+rbWgjMVHHI66QOnIo7M1wuhFLwI3goj4oUNcVrNLZpRqzZcsI5lWCHu\nhsAhLd2ZAgMBAAECggEABrnXr0140CTrV+Od6g8vcC+ByK9DeQkY4jTcQRh02/a5\nouYk7f9de+it152AByT2YbYLpquowPlgjsa9MUAh2mWnSFnIrL1rI73Sn3JZSbLZ\nX9qmHDwV6dG+Y5+AHl/anLZoFmybFfBNX4dzESneVeAiYcPgPeDnumhf2aziX9QU\nBcLOwulIeZlva5eG5scr6BcL1ghMBsrZakg+ak81EGnMBcx05uGBzmvG8HlYJ50v\nBjmt+MlFavx9k+B0DlfHxJ25u/AqpNlMLXH0sh6CLFvGizbk2JeEe+kdDNahKliL\n21wRCUetv1NzrZONko6mY06hltO5H5hCb++86MDTkQKBgQD9a0ITNlMJ8hYPokFE\ndVHRQPwM3TqafOhT7oinORorMWiRZio3htHueag4df8Y3PG6E+UhqZNDCGeTRuMb\ngcfT/jewde15RuORmGJ9hgE0w2GHp/wXTE40IF2JgjvW0z+PyZZZ6S1J5PLWLQff\ngt9/7F7W50inH0IyWsRstaA0EQKBgQDTUyjRuUwQ+bayoCKwHOo+0ZsYDF/l8L9B\nFLRkU0592YwGdoIWDKV1sTAKgQMOYowiFkx3VSSbuMe7bDZ3jNUXs4Tsbygxx/N4\ncEfg1u/S9jwtrfJdwa880lIjLS+8NwqO4cjHnnzDlhkgdBqN2ZvhVGx5hhqA5JJe\n5rt+1vB5CQKBgQDYpUhgmlGVMBOyG9lGSDHA/Zg8+ygtiFkp38ONiiCYCm5F1xyC\nSczQ3cp1MlL6E3DHzlhVVd4iMV4ypyhijKmjzzIWtkplIrhL8QVKIDSJwfpv+alm\n1YIJyB2O//peJkyxhPn3NYPVJ1h+xxJy/zRI7W8Ks8EFtpBl8fj4orEpsQKBgFIb\nElYBz4sc6p4WV8PjSCPmHoNGc5AMbNKlb703HN0KxDvSmZJlkXfbwxWhsIVLRrUL\nwuPugc27CmdIkRT78+NEjZWrToug63jU7yhtejqWDyWUWwGQejyAXwdpzA0tuX1w\nPilI66K2U8bnNVX9wXHX8ll5AB0qMbCLpzeN3Vq5AoGALLcGW4m1xv9+8y5xOi1A\nKSZwiuQtZPCg40l68Rn8SFJDBLaWvzZLcgl94UVigxxUMPthUO7lK5s80HTrOh9i\nAguZrNsv9mbN053lD7CYfKWcS33VBgVTX0CT3ZgHZnSGZzGIbsd/egGPt0lhTKFO\nuTUOgWUvwM5OhzFTyzcg5i8=\n-----END PRIVATE KEY-----\n',
      }),
    });
  }

  public firestore(): admin.firestore.Firestore {
    return admin.firestore();
  }
}
