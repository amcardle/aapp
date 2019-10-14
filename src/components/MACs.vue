/* eslint-disable camelcase */
//Source https://watermark.silverchair.com/aeg132.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAAlQwggJQBgkqhkiG9w0BBwagggJBMIICPQIBADCCAjYGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQM3FyRemghyrnPogtpAgEQgIICB9rWI1qY4g19Avd8kS3CDnVvtVBO_8Fx_XtbHSZzRFx93RxIOPW5JBWF1Gb8bnS8_CGt83XkdS5jnDeaUao8l9Pldk1mbaQn8Sv4WylSZdnngw_DYqwBt17nkSvv1lEszRBj4ukT5v4-9CNym4hSMelpWoyk6r6Rssbwik_oZGal7tev6TZB8xhvhRfBsX2xSpPvhJ21J0Mk2pDy17LPRxqvaT_g1ZDIu_tr18yvoE6LJEdteUQhrAjxcmP8F4_s3_--RlLjUoK7L8aRIEvuBh45uXGAnrktHqnFopWnO-qPduAv6LYVeeVJAzEzNdjW2cKHmozJyDRwu9VLSNz3Zt-qOSdBoUrEEj1jczqckh_1CZxaNg1nrSKePYhAXoXK9xqBXGsLqIe36LDd_CQ-_BuA4w7PqYN3MyAQekeC7r_dOgptMT6EQ6mkhdxjxyFpSe_BeeKUYxgMX2zxXv-zk3JzeJZ1nj-ejgA06c5PjfFkl71Xx2GdTtOuLHbVbsf1Q6iR7GvGnxrGwsZws1ho9D1IKZS7lZIDpPYer3V-DqAHlOpVS4S5RCLpqH2YpeOGxAFflxOmFevjmcyUqlplzxoIRSZyHWa9PoFkwiK1AUX4niKynqHBU9VWFMdGgdbSRS6IAaJ3rWA4A55c0J2DOR0T5o6LcHlitkzx1yn7qQ7hONPQD_IcPw
<template>
    <div class="home">
        <b-card title="MACs">
            <div class="container">
              Age: {{age}} years
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Agent</th>
                            <th scope="col">MAC 0.6</th>
                            <th scope="col">MAC 0.8</th>
                            <th scope="col">MAC 1.0</th>
                            <th scope="col">MAC 1.2</th>
                            <th scope="col">MAC 1.4</th>
                            <th scope="col">MAC 1.6</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Sevoflurane</th>
                            <td>{{calc(age, 1.80, 0.6)}}%</td>
                            <td>{{calc(age, 1.80, 0.8)}}%</td>
                            <td>{{calc(age, 1.80, 1,0)}}%</td>
                            <td>{{calc(age, 1.80, 1.2)}}%</td>
                            <td>{{calc(age, 1.80, 1.4)}}%</td>
                            <td>{{calc(age, 1.80, 1.6)}}%</td>
                        </tr>
                        <tr>
                            <th scope="row">Isoflurane</th>
                            <td>{{calc(age, 1.17, 0.6)}}%</td>
                            <td>{{calc(age, 1.17, 0.8)}}%</td>
                            <td>{{calc(age, 1.17, 1,0)}}%</td>
                            <td>{{calc(age, 1.17, 1.2)}}%</td>
                            <td>{{calc(age, 1.17, 1.4)}}%</td>
                            <td>{{calc(age, 1.17, 1.6)}}%</td>
                        </tr>
                        <tr>
                            <th scope="row">Nitrous Oxide</th>
                            <td>{{calc(age, 104, 0.6)}}%</td>
                            <td>{{calc(age, 104, 0.8)}}%</td>
                            <td>{{calc(age, 104, 1,0)}}%</td>
                            <td>{{calc(age, 104, 1.2)}}%</td>
                            <td>{{calc(age, 104, 1.4)}}%</td>
                            <td>{{calc(age, 104, 1.6)}}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </b-card>
    </div>
</template>

<script>
import { get } from 'vuex-pathify'
import * as math from 'mathjs'

const MAC_calculator = function (age, MAC1, MAC) {
  return math.round(math.eval(`1 * ${MAC1} * 10^(-0.00269*(${age}-40)) * ${MAC}`), 2)
}

export default {
  name: 'MACs',

  data () {
    return {
      calc: MAC_calculator
    }
  },
  computed: {
    age: get('patient/age')
  }
}
</script>
