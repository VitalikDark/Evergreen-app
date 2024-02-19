<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-text-field
            label="period"
            placeholder="YYYYMMDD"
            v-model="formData.period"
        />
      </v-col>
      <v-col>
        <v-text-field
            label="start"
            placeholder="YYYYMMDD"
            v-model="formData.start"
        />
      </v-col>
      <v-col>
        <v-text-field
            label="end"
            placeholder="YYYYMMDD"
            v-model="formData.end"
        />
      </v-col>
      <v-col>
        <v-text-field
            v-model="formData.order"
            label="order"
        />
      </v-col>
      <v-col>
        <v-text-field
            v-model="formData.sort"
            label="sort"
        />
      </v-col>
      <v-col>
        <v-text-field
            v-model="formData.id_api"
            label="id_api"
        />
      </v-col>
      <v-col>
        <v-text-field
            v-model="formData.s181"
            label="s181"
        />
      </v-col>
      <v-col>
        <v-text-field
            v-model="formData.freq"
            label="freq"
        />
      </v-col>

      <v-col align-self="center">
        <v-btn small @click="handleClickApply">
          Apply
        </v-btn>
        <v-btn small @click="handleClickResetFilter">
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DataTableFilter",

  data() {
    return {
      formData: {
        date: '',
        start: '',
        end: '',
        sort: '',
        order: '',
        period: '',
        id_api: '',
        s181: '',
        freq: ''
      }
    }
  },

  methods: {
    handleClickApply() {
      console.log(1, this.createFormData())
      this.$emit('search', this.createFormData())
    },

    handleClickResetFilter() {
      this.$emit('reset')
      this.resetFields()
    },

    resetFields() {
      this.formData.period = ''
      this.formData.start = ''
      this.formData.end = ''
      this.formData.sort = ''
      this.formData.order = ''
      this.formData.id_api = ''
      this.formData.s181 = ''
      this.formData.freq = ''
    },

    createFormData() {
      return {
        period: this.formData.period,
        start: this.formData.start,
        end: this.formData.end,
        sort: this.formData.sort,
        order: this.formData.order,
        id_api: this.formData.id_api,
        s181: this.formData.s181,
        freq: this.formData.freq,
      }
    }

  }
}
</script>