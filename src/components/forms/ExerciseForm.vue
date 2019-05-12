<template>
  <div class="card">
    <div class="card-content">
      <form action="#">
        <div class="field">
          <label class="label">Exercise Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Eg. Rollator Cuff Stretch">
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Eg. Hold your head up high, and cuff as hard as you can."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="file has-name">
          <label class="file-label">
            <input class="file-input" type="file" name="resume">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-image"></i>
              </span>
              <span class="file-label">Upload image...</span>
            </span>
            <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
          </label>
        </div>
        <button class="button card-footer-item is-primary">Edit</button>
        <button class="button card-footer-item is-danger">Delete</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>