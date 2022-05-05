import React, { useState } from "react";

function SignUp() {
  return (
    <div class="container">
      <h1 class="is-size-1 mt-4 has-text-centered">
        WALK-A-DOG
        <br />
        <br />
      </h1>
      <div class="field column is-4 is-offset-4">
        <label class="label"></label>
        <input class="input" type="login" placeholder="Login" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      <div class="field column is-4 is-offset-4">
        <label class="label"></label>
        <input class="input" type="password" placeholder="Hasło" />
      </div>
      <div class="field has-text-centered">
        <p class="control">
          <button type="submit" class="button is-link mb-6">
            ZALOGUJ
          </button>
          <div>
            <a
              class="button is-white mb-6 mr-6 has-text-info"
              href="/ReminderPassword"
            >
              przypomnij
              <br /> hasło
            </a>
            <a
              class="button is-white mb-6 ml-6 has-text-info"
              href="/ReminderPassword"
            >
              zarejestruj
              <br /> się
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}
export default SignUp;
