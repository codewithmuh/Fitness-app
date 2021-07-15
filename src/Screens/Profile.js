import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <div className="port-right-sidebar">
        <div className="profile-main">
          <div class="panel-header">
            <div class="profile-image-upload">
              <div class="profile-photo-v2"></div>
              <label className="profile-upload-btn" for="profile-photo">
                Upload photo
              </label>
              <input
                type="file"
                accept="image/*"
                id="profile-photo"
                name="profile-photo"
                placeholder="Photographic ID"
                title="Photographic ID"
              />
              <p>
                Please upload a clear image of yourself that you wish to use on
                your V-Health Passport
              </p>
            </div>
            <div class="info">
              <h1>Manage Account Profile</h1>
              <p>Your account profile is used to provide proof of identity.</p>
              <p>
                Please ensure the information entered below is accurate and that
                you have provided a profile photo that allows you to be easily
                recognised.
              </p>
              <div className="profile-save-btn">
                <button name="profile-save2" class="lozenge">
                  Save changes
                </button>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="profile-items">
              <div className="profile-item">
                <label>Surname</label>
                <input type="text" name="profile-displayname" title="Surname" />
              </div>
              <div className="profile-item">
                <p>Upload proof of identity</p>
                <p>This must be a clear image of your photo ID</p>
                <label className="upload-item-profile" for="profile-proof">
                  Upload document
                </label>
                <input
                  type="file"
                  id="profile-proof"
                  name="profile-proof"
                  placeholder="Proof of identity"
                  title="Proof of identity"
                />
              </div>
              <div className="profile-item">
                <label>Phone number</label>
                <input
                  type="phone"
                  name="profile-displayname"
                  title="Phone number"
                />
              </div>
              <div className="profile-item">
                <div className="profile-mini-main">
                  <div className="profile-mini-item">
                    <label>Postal code</label>
                    <input
                      type="postalcode"
                      name="profile-displayname"
                      title="Postal code"
                    />
                  </div>
                  <div className="profile-mini-item">
                    <label>Country</label>
                    <select id="profile-country" name="profile-country">
                      <option value="">Country - please select</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Afganistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antigua &amp; Barbuda">
                        Antigua &amp; Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bonaire">Bonaire</option>
                      <option value="Bosnia &amp; Herzegovina">
                        Bosnia &amp; Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Ter">
                        British Indian Ocean Ter
                      </option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Canary Islands">Canary Islands</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Channel Islands">Channel Islands</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos Island">Cocos Island</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote DIvoire">Cote DIvoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Curaco">Curacao</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="East Timor">East Timor</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands">Falkland Islands</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Ter">
                        French Southern Ter
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Great Britain">Great Britain</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="India">India</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea North">Korea North</option>
                      <option value="Korea Sout">Korea South</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macau">Macau</option>
                      <option value="Macedonia">Macedonia</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Midway Islands">Midway Islands</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Nambia">Nambia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherland Antilles">
                        Netherland Antilles
                      </option>
                      <option value="Netherlands">
                        Netherlands (Holland, Europe)
                      </option>
                      <option value="Nevis">Nevis</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau Island">Palau Island</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Phillipines">Philippines</option>
                      <option value="Pitcairn Island">Pitcairn Island</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Republic of Montenegro">
                        Republic of Montenegro
                      </option>
                      <option value="Republic of Serbia">
                        Republic of Serbia
                      </option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="St Barthelemy">St Barthelemy</option>
                      <option value="St Eustatius">St Eustatius</option>
                      <option value="St Helena">St Helena</option>
                      <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                      <option value="St Lucia">St Lucia</option>
                      <option value="St Maarten">St Maarten</option>
                      <option value="St Pierre &amp; Miquelon">
                        St Pierre &amp; Miquelon
                      </option>
                      <option value="St Vincent &amp; Grenadines">
                        St Vincent &amp; Grenadines
                      </option>
                      <option value="Saipan">Saipan</option>
                      <option value="Samoa">Samoa</option>
                      <option value="Samoa American">Samoa American</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome &amp; Principe">
                        Sao Tome &amp; Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Tahiti">Tahiti</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad &amp; Tobago">
                        Trinidad Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks &amp; Caicos Is">
                        Turks Caicos Is
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Erimates">
                        United Arab Emirates
                      </option>
                      <option value="United States of America">
                        United States of America
                      </option>
                      <option value="Uraguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City State">
                        Vatican City State
                      </option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Virgin Islands (Brit)">
                        Virgin Islands (Brit)
                      </option>
                      <option value="Virgin Islands (USA)">
                        Virgin Islands (USA)
                      </option>
                      <option value="Wake Island">Wake Island</option>
                      <option value="Wallis &amp; Futana Is">
                        Wallis &amp; Futana Is
                      </option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zaire">Zaire</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                  <div className="profile-mini-item">
                    <label>Province/State</label>
                    <select name="user-ethnicity">
                      <option value="">Province/State - please select</option>
                      <option value="English, Welsh, Scottish, Northern Irish or British">
                        English, Welsh, Scottish, Northern Irish or British
                      </option>
                      <option value="Irish">Irish</option>
                      <option value="Gypsy or Irish Traveller">
                        Gypsy or Irish Traveller
                      </option>
                      <option value="Any other White background">
                        Any other White background
                      </option>
                      <option value="White and Black Caribbean">
                        White and Black Caribbean
                      </option>
                      <option value="White and Black African">
                        White and Black African
                      </option>
                      <option value="White and Asian">White and Asian</option>
                      <option value="Any other Mixed or Multiple ethnic background">
                        Any other Mixed or Multiple ethnic background
                      </option>
                      <option value="Indian">Indian</option>
                      <option value="Pakistani">Pakistani</option>
                      <option value="Bangladeshi">Bangladeshi</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Any other Asian background">
                        Any other Asian background
                      </option>
                      <option value="African">African</option>
                      <option value="Caribbean">Caribbean</option>
                      <option value="Any other Black, African or Caribbean background">
                        Any other Black, African or Caribbean background
                      </option>
                      <option value="Arab">Arab</option>
                      <option value="Any other ethnic group">
                        Any other ethnic group
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="profile-item">
                <div className="profile-mini-main">
                  <div className="profile-mini-item">
                    <label>Date of birth</label>
                    <select name="user-dob-day">
                      <option value="">Day - please select</option>
                      <option value="01">1st</option>
                      <option value="02">2nd</option>
                      <option value="03">3rd</option>
                      <option value="04">4th</option>
                      <option value="05">5th</option>
                      <option value="06">6th</option>
                      <option value="07">7th</option>
                      <option value="08">8th</option>
                      <option value="09">9th</option>
                      <option value="10">10th</option>
                      <option value="11">11th</option>
                      <option value="12">12th</option>
                      <option value="13">13th</option>
                      <option value="14">14th</option>
                      <option value="15">15th</option>
                      <option value="16">16th</option>
                      <option value="17">17th</option>
                      <option value="18">18th</option>
                      <option value="19">19th</option>
                      <option value="20">20th</option>
                      <option value="21">21st</option>
                      <option value="22">22nd</option>
                      <option value="23">23rd</option>
                      <option value="24">24th</option>
                      <option value="25">25th</option>
                      <option value="26">26th</option>
                      <option value="27">27th</option>
                      <option value="28">28th</option>
                      <option value="29">29th</option>
                      <option value="30">30th</option>
                      <option value="31">31st</option>
                    </select>
                  </div>
                  <div className="profile-mini-item">
                    <label>Gender</label>
                    <select name="user-gender">
                      <option value="">Gender - please select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="profile-mini-item">
                    <label>Blood Type</label>
                    <select id="profile-blood-type" name="profile-blood-type">
                      <option value="">Please select your blood type</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="profile-item">
                <div className="profile-mini-main">
                  <div className="profile-mini-item">
                    <label>Password</label>
                    <input type="password" name="profile-password" />
                  </div>
                  <div className="profile-mini-item">
                    <label>Re-Enter Password</label>
                    <input type="password" name="profile-password-confirm" />
                  </div>
                </div>
              </div>
              <div class="profile-save-btn last">
                <button name="profile-save2" class="lozenge">
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
