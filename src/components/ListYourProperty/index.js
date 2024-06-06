import React, { useState } from "react";
import cn from "classnames";
import styles from "./ListYourProperty.module.sass";
import Dropdown from "../../components/Dropdown";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Checkbox from "../Checkbox";
import DateSingle from "../DateSingle/DateSingle";
import DateRange from "../DateRange/DateRange";

// import Loader from "../../components/Loader";
// import Preview from "./Preview";

const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Category",
    url: "/get-quote",
  },
  {
    title: "Moving Local",
  },
];

const bedRoomOptions = ["1", "2", "3", "4"];
const propertyTypeOptions = [
  "Single storey house",
  "Double storey house",
  "Triple storey house",
  "Apartment with elevator",
  "Apartment without elevator (1st floor)",
  "Apartment without elevator (2nd floor)",
  "Apartment without elevator (3rd floor+)",
  "Storage Facility",
  "Commercial Property",
];
const moveOptions = ["Urgent", "On", "Between", "On or before"];
const serviceLevelOptions = ["Budget", "Affordable", "Premium"];
const livingRoomOptions = ["1", "2", "3", "4"];
const kitchenOptions = ["1", "2", "3", "4"];
const unitsOptions = ["%", "$", "€"];
const currencyOptions = ["$ USD", "€ EUR"];
const timeOptions = ["per Night", "per Day", "per Week"];
const rooms = [
  { name: "Bedrooms", number: "One" },
  { name: "Kitchen", number: "Two" },
  { name: "Dining Room / Meal Area", number: "Three" },
  { name: "Lounge / Family Rooms", number: "Four" },
  { name: "Study / Home Office", number: "Five" },
  { name: "Laundry", number: "Six" },
  { name: "Garden / Outdoor", number: "Seven" },
  { name: "Garage / Shed", number: "Eight" },
  { name: "Boxes / Bags", number: "Nine" },
  { name: "Hall / Entry", number: "Ten" },
  { name: "Fitness / Gym Equipment", number: "Eleven" },
  { name: "Additional Items", number: "Twelve" },
];

const Upload = () => {
  const [propertyType, setPropertyType] = useState(propertyTypeOptions[0]);
  const [serviceLevel, setServiceLevel] = useState(serviceLevelOptions[0]);
  const [moveTime, setMoveTime] = useState(moveOptions[0]);
  const [on, setOn] = useState(new Date());
  const [onBefore, setOnBefore] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [bedRoom, setBedRoom] = useState(bedRoomOptions[0]);
  const [livingRoom, setLivingRoom] = useState(livingRoomOptions[0]);
  const [kitchen, setKitchen] = useState(kitchenOptions[0]);
  const [units, setUnits] = useState(unitsOptions[0]);
  const [currency, setCurrency] = useState(currencyOptions[0]);
  const [time, setTime] = useState(timeOptions[0]);

  const [visiblePreview, setVisiblePreview] = useState(false);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.inner}>
            <div className={styles.wrapper}>
              <form className={styles.form} action="">
                <div className={styles.list}>
                  <div className={styles.item}>
                    <div className={cn(styles.category)}>
                      Upload photos (Optional)
                    </div>
                    <div className={styles.note}>
                      Drag or choose your file to upload
                    </div>
                    <div className={styles.file}>
                      <input className={styles.load} type="file" />
                      <div className={styles.icon}>
                        <Icon name="upload-file" size="24" />
                      </div>
                      <div className={styles.format}>
                        PNG, GIF, WEBP, MP4. Max 500Mb.
                      </div>
                    </div>
                  </div>
                  {/* Pick Up details */}
                  <div className={styles.item}>
                    <div className={styles.category}>Pick-up Details</div>
                    <div className={styles.fieldset}>
                      <div className={styles.row}>
                        <div className={cn(styles.col, styles.w50)}>
                          <div className={styles.label}>
                            Pick-up address or suburb
                          </div>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <TextInput
                                className={styles.field}
                                name="discount"
                                type="text"
                                placeholder="e. g. 'Reynoldsburgh, TN 01761"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className={cn(styles.col, styles.w50)}>
                          <div className={styles.label}>Property type</div>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <Dropdown
                                className={styles.dropdown}
                                value={propertyType}
                                setValue={setPropertyType}
                                options={propertyTypeOptions}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.label}>{}</div>
                    <TextArea
                      className={styles.field}
                      label="Property has access or parking restrictions (optional)"
                      name="description"
                      placeholder="Please describe the access/parking restrictions"
                      required
                    />
                  </div>
                  {/* Pick Up details */}

                  {/* Drop off details */}
                  <div className={styles.item}>
                    <div className={styles.category}>Drop-off Details</div>
                    <div className={styles.fieldset}>
                      <div className={styles.row}>
                        <div className={cn(styles.col, styles.w50)}>
                          <div className={styles.label}>
                            Drop-off address or suburb
                          </div>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <TextInput
                                className={styles.field}
                                name="discount"
                                type="text"
                                placeholder='e. g. "180"'
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className={cn(styles.col, styles.w50)}>
                          <div className={styles.label}>Property type</div>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <Dropdown
                                className={styles.dropdown}
                                value={propertyType}
                                setValue={setPropertyType}
                                options={propertyTypeOptions}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.label}>{}</div>
                    <TextArea
                      className={styles.field}
                      label="Property has access or parking restrictions (optional)"
                      name="description"
                      placeholder="Please describe the access/parking restrictions"
                      required
                    />
                  </div>
                  {/* Drop off details */}

                  <div className={styles.item}>
                    <div className={styles.category}>Inventory</div>
                    <div className={styles.label}>
                      Please click on each room / area below and select the
                      items you will be moving.
                    </div>
                    <div
                      className="accordion faq-accordion"
                      id="accordionExample"
                    >
                      {rooms.map((room) => {
                        return (
                          <div
                            key={room.name}
                            className="accordion-item single-accordion-inner"
                          >
                            <h2
                              className="accordion-header"
                              id={`heading${room.number}`}
                            >
                              <button
                                className="accordion-button collapsed" // Add 'collapsed' class to button
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${room.number}`}
                                aria-expanded="false" // Change aria-expanded to false
                                aria-controls={`collapse${room.number}`}
                              >
                                {room.name}
                              </button>
                            </h2>
                            <div
                              id={`collapse${room.number}`}
                              className="accordion-collapse collapse" // Remove 'show' class
                              aria-labelledby={`heading${room.number}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                A removalist is a company that specialises in
                                helping people move their belongings from one
                                location to another. They provide a range of
                                services, including packing, loading,
                                transportation, unloading, and unpacking. Some
                                removalists may also offer additional services,
                                such as storage solutions or pet transport.
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className={styles.item}>
                    <div className={styles.category}>When</div>
                    <div className={styles.label}>
                      When do you need to move?
                    </div>
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w33)}>
                        <Dropdown
                          className={styles.dropdown}
                          value={moveTime}
                          setValue={setMoveTime}
                          options={moveOptions}
                        />
                      </div>
                      {moveTime === "On" && (
                        <div className={cn(styles.col, styles.w33)}>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <DateSingle startDate={on} setStartDate={setOn} />
                            </div>
                          </div>
                        </div>
                      )}
                      {moveTime === "Between" && (
                        <div className={cn(styles.col, styles.w33)}>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <DateRange
                                setDateRange={setDateRange}
                                startDate={startDate}
                                endDate={endDate}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {moveTime === "On or before" && (
                        <div className={cn(styles.col, styles.w33)}>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <DateSingle
                                startDate={onBefore}
                                setStartDate={setOnBefore}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={styles.item}>
                    <div className={styles.category}>Level of Service</div>
                    <div className={styles.label}>
                      What best describes the level of service you would prefer?
                    </div>
                    <div className={styles.cell}>
                      <Dropdown
                        className={styles.dropdown}
                        value={serviceLevel}
                        setValue={setServiceLevel}
                        options={serviceLevelOptions}
                      />
                    </div>
                  </div>

                  <div className={styles.item}>
                    <div className={styles.category}>Other Details</div>
                    <TextArea
                      className={styles.field}
                      label="Any other important details"
                      name="description"
                      placeholder="Please describe here"
                      required
                    />
                  </div>

                  <div className={styles.item}>
                    <div className={styles.category}>Pick-up Details</div>
                    <div className={styles.fieldset}>
                      <TextInput
                        className={styles.field}
                        label="Pick-up address or suburb"
                        name="title"
                        type="text"
                        placeholder='e. g. "Spectacular views of Queenstown"'
                        required
                      />
                      <div className={styles.row}>
                        <div className={cn(styles.col, styles.w70)}>
                          <div className={styles.label}>price</div>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <TextInput
                                className={styles.field}
                                name="discount"
                                type="text"
                                placeholder='e. g. "180"'
                                required
                                empty
                              />
                            </div>
                            <div className={styles.cell}>
                              <Dropdown
                                className={styles.dropdown}
                                value={currency}
                                setValue={setCurrency}
                                options={currencyOptions}
                                empty
                              />
                            </div>
                            <div className={styles.cell}>
                              <Dropdown
                                className={styles.dropdown}
                                value={time}
                                setValue={setTime}
                                options={timeOptions}
                                empty
                              />
                            </div>
                          </div>
                        </div>
                        <div className={cn(styles.col, styles.w30)}>
                          <div className={styles.label}>Discount</div>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <TextInput
                                className={styles.field}
                                name="discount"
                                type="text"
                                placeholder='e. g. "10"'
                                required
                                empty
                              />
                            </div>
                            <div className={styles.cell}>
                              <Dropdown
                                className={styles.dropdown}
                                value={units}
                                setValue={setUnits}
                                options={unitsOptions}
                                empty
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <TextInput
                          className={styles.field}
                          label="location"
                          name="location"
                          type="text"
                          placeholder="e. g. “Queenstown, Otago, New Zealand”"
                          required
                        />
                        <button className={styles.map}>Google map</button>
                      </div>
                      <div className={styles.row}>
                        <div className={cn(styles.col, styles.w33)}>
                          <div className={styles.label}>bed room</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={bedRoom}
                            setValue={setBedRoom}
                            options={bedRoomOptions}
                          />
                        </div>
                        <div className={cn(styles.col, styles.w33)}>
                          <div className={styles.label}>living room</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={livingRoom}
                            setValue={setLivingRoom}
                            options={livingRoomOptions}
                          />
                        </div>
                        <div className={cn(styles.col, styles.w33)}>
                          <div className={styles.label}>kitchen</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={kitchen}
                            setValue={setKitchen}
                            options={kitchenOptions}
                          />
                        </div>
                      </div>
                      <TextArea
                        className={styles.field}
                        label="description"
                        name="description"
                        placeholder='e. g. "Spectacular views of Queenstown"'
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.category}>Amenities</div>
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service1"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service2"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service3"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service4"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.category}>Core features</div>
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service5"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                      <div className={cn(styles.col, styles.w50)}>
                        <TextInput
                          className={styles.field}
                          name="service6"
                          type="text"
                          placeholder="e. g. Wifi 24/7"
                          required
                        />
                      </div>
                    </div>
                    {/* <button className={cn("button-stroke", styles.button)}>
                      <Icon name="plus" size="16" />
                      <span>Add more feature</span>
                    </button> */}
                  </div>
                </div>
                {/* <div className={styles.foot}>
                  <button
                    className={cn("button-stroke tablet-show", styles.button)}
                    onClick={() => setVisiblePreview(true)}
                    type="button"
                  >
                    Preview
                  </button>
                  <button className={cn("button", styles.button)}>
                    <span>Submit for review</span>
                    <Icon name="arrow-next" size="10" />
                  </button>
                </div> */}
              </form>
            </div>
            {/* <Preview
              className={cn(styles.preview, {
                [styles.active]: visiblePreview,
              })}
              onClose={() => setVisiblePreview(false)}
            /> */}
            <div className={styles.item}>
              <div className={styles.category}>Additional Services</div>
              <div className={styles.label}>
                Do you require any of the additional services?
              </div>
              <div className={styles.fieldset}>
                <div className="row">
                  <div className={cn(styles.col)}>
                    <Checkbox content={"I need assistance with packing."} />
                  </div>
                </div>
                <div className="row">
                  <div className={cn(styles.col)}>
                    <Checkbox content={"I need assistance with unpacking."} />
                  </div>
                </div>
                <div className="row">
                  <div className={cn(styles.col)}>
                    <Checkbox content={"I’m looking for storage solutions."} />
                  </div>
                </div>
                <div className="row">
                  <div className={cn(styles.col)}>
                    <Checkbox
                      content={
                        "I need assistance with end-of-lease/move-out cleaning."
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
