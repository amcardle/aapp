<template lang="pug">
.home
  b-card(title='WHO Surgical Safety Checklist')
    b-form-group
      .row
        .col-4
          b Before Induction of Anaesthesia
          b-form-checkbox-group(stacked="", v-model="WHO_surgical_safety.before_induction" :state="before_induction_valid")
            b-form-checkbox(value="consent") Has the patient confirmed his/her identity, site, procedure, and consent?
            b-form-checkbox(value="site") Is the site marked (or NA)?
            b-form-checkbox(value="machine") Is the anaesthesia machine and medication check complete? 
            b-form-checkbox(value="pulse_ox") Is the pulse oximeter on the patient and functioning?
          br
          b-form-radio-group(stacked="", v-model="WHO_surgical_safety.allergy", :state="before_induction_valid")
            |Does the patient have a known allergy? 
            b-form-radio(value="no_allergy") No Allergy
            b-form-radio(value="yes_allergy") Yes Allergy
          br
          b-form-radio-group(stacked="", v-model="WHO_surgical_safety.difficult_airway", :state="before_induction_valid")
            |Difficult airway or aspiration risk?
            b-form-radio(value="not_difficult") No
            b-form-radio(value="difficult") Yes, and equipment/assistance available
          br
          b-form-radio-group(stacked="", v-model="WHO_surgical_safety.blood_loss", :state="before_induction_valid")
            |Risk of >500ml blood loss (7ml/kg in children)?
            b-form-radio(value="no_risk") No
            b-form-radio(value="risk") Yes, and two IVs/central access and fluids planned
        .col-4
          b Before Skin Incision
          b-form-checkbox-group(stacked="", v-model="WHO_surgical_safety.before_incision" :state="before_incision_valid")
            b-form-checkbox(value="introductions") Confirm all team members have introduced themselves by name and role.
            b-form-checkbox(value="identify") Confirm the patient’s name, procedure, and where the incision will be made.
            b-form-checkbox(value="antibiotics") Has antibiotic prophylaxis been given within the last 60 minutes?
            b Anticipated Critical Events
            br
            i Surgeon
            b-form-checkbox(value="critical") What are the critical or non-routine steps?
            b-form-checkbox(value="duration") How long will the case take?
            b-form-checkbox(value="blood_loss") What is the anticipated blood loss?
            i Anaesthatist
            b-form-checkbox(value="concerns") Are there any patient-specific concerns?
            i Nursing Team
            b-form-checkbox(value="sterility") Has sterility (including indicator results) been confirmed?
            b-form-checkbox(value="equipment") Are there equipment issues or any concerns?
            b-form-checkbox(value="imaging") Is essential imaging displayed?
        .col-4
          b Before patient leaves operating room
          b-form-checkbox-group(stacked="", v-model="WHO_surgical_safety.before_departure" :state="before_departure_valid")
            b Nurse Verbally Confirms
            b-form-checkbox(value="name") The name of the procedure
            b-form-checkbox(value="counts") Completion of instrument, sponge and needle counts
            b-form-checkbox(value="specimens") Specimen labelling (read specimen labels aloud, including patient name)
            b-form-checkbox(value="equipment") Whether there are any equipment problems to be addressed
            b To Surgeon, Anaesthetist and Nurse:
            b-form-checkbox(value="recovery") What are the key concerns for recovery and management of this patient? 
</template>


<style lang="scss">
</style>


<script>
import { mapState } from 'vuex'
import { sync, get } from 'vuex-pathify';


export default {
  name: "ChecklistWHO",
  data: function () {
    return {
      WHO_surgical_safety: { before_induction: [], before_incision: [], before_departure: [], allergy: null, difficult_airway: null, blood_loss: null }
    }
  },

  computed: {


    before_induction_valid: function () {
      return Boolean(this.WHO_surgical_safety.before_induction.length == 4
        && this.WHO_surgical_safety.allergy
        && this.WHO_surgical_safety.difficult_airway
        && this.WHO_surgical_safety.blood_loss)
    },

    before_incision_valid: function () {
      return (this.WHO_surgical_safety.before_incision.length == 10)
    },

    before_departure_valid: function () {
      return (this.WHO_surgical_safety.before_departure.length == 5)
    }
  },
};
</script>