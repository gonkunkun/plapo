<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { namespace } from 'vuex-class'

import * as plan from '~/store/modules/plan'

const Plan = namespace(plan.name)

@Component({
  components: {}
})
export default class IndexPage extends Vue {
  /** head() */
  /** prop() */
  /** data() */
  /** computed() */
  /** methods() */
}
</script>
