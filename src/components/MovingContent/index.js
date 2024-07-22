import React, { useState } from "react";
import cn from "classnames";
import styles from "./MovingContent.module.sass";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import Checkbox from "../Checkbox";
import DateSingle from "../DateSingle/DateSingle";
import DateRange from "../DateRange/DateRange";
import Accordian from "../Accordian/Accordian";
import Modal from "../Modal";
import { Link } from "react-router-dom";

// import Loader from "../../components/Loader";
// import Preview from "./Preview";

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

const rooms = [
  {
    name: "Bedrooms",
    number: "One",
    items: [
      { name: "Baby Bassinette", count: 0, volume_cubic_meters: 0.2 },
      { name: "Baby Bath", count: 0, volume_cubic_meters: 0.1 },
      { name: "Baby Change Table", count: 0, volume_cubic_meters: 0.3 },
      { name: "Baby Cot - Assembled", count: 0, volume_cubic_meters: 0.5 },
      { name: "Baby Cot - Dismantled", count: 0, volume_cubic_meters: 0.3 },
      { name: "Bed & Mattress - Bunks", count: 0, volume_cubic_meters: 1.0 },
      { name: "Bed & Mattress - Double", count: 0, volume_cubic_meters: 1.2 },
      { name: "Bed & Mattress - King", count: 0, volume_cubic_meters: 1.4 },
      { name: "Bed & Mattress - Queen", count: 0, volume_cubic_meters: 1.3 },
      { name: "Bed & Mattress - Single", count: 0, volume_cubic_meters: 0.8 },
      { name: "Bed & Mattress - Trundle", count: 0, volume_cubic_meters: 0.9 },
      { name: "Bed - Water", count: 0, volume_cubic_meters: 1.5 },
      { name: "Bedside Table / Drawer", count: 0, volume_cubic_meters: 0.2 },
      { name: "Bookshelf", count: 0, volume_cubic_meters: 0.5 },
      { name: "Chair", count: 0, volume_cubic_meters: 0.2 },
      { name: "Chest", count: 0, volume_cubic_meters: 0.6 },
      { name: "Chest of Drawers", count: 0, volume_cubic_meters: 0.7 },
      { name: "Desk", count: 0, volume_cubic_meters: 0.8 },
      { name: "Desk - Corner", count: 0, volume_cubic_meters: 1.0 },
      { name: "Dressing Table", count: 0, volume_cubic_meters: 0.6 },
      { name: "Lamp", count: 0, volume_cubic_meters: 0.05 },
      { name: "Lowboy", count: 0, volume_cubic_meters: 0.4 },
      { name: "Mirror", count: 0, volume_cubic_meters: 0.2 },
      { name: "Outdoor Lounge - 2 Seater", count: 0, volume_cubic_meters: 0.8 },
      { name: "Pram / Stroller", count: 0, volume_cubic_meters: 0.3 },
      { name: "TV", count: 0, volume_cubic_meters: 0.3 },
      { name: "Tallboy", count: 0, volume_cubic_meters: 0.8 },
      { name: "Toy Box", count: 0, volume_cubic_meters: 0.4 },
      { name: "Wardrobe - Double Door", count: 0, volume_cubic_meters: 1.0 },
      { name: "Wardrobe - Single Door", count: 0, volume_cubic_meters: 0.7 },
      { name: "Wardrobe - Three Door", count: 0, volume_cubic_meters: 1.2 },
    ],
  },
  {
    name: "Kitchen",
    number: "Two",
    items: [
      { name: "Dishwasher", count: 0, volume_cubic_meters: 0.5 },
      { name: "Fridge - 2 Door", count: 0, volume_cubic_meters: 1.2 },
      { name: "Fridge - Large", count: 0, volume_cubic_meters: 1.0 },
      { name: "Fridge - Medium", count: 0, volume_cubic_meters: 0.8 },
      { name: "Fridge - Small", count: 0, volume_cubic_meters: 0.6 },
      { name: "High Chair", count: 0, volume_cubic_meters: 0.2 },
      { name: "Kitchen Table / Bench", count: 0, volume_cubic_meters: 1.0 },
      { name: "Microwave", count: 0, volume_cubic_meters: 0.2 },
      { name: "Stool", count: 0, volume_cubic_meters: 0.1 },
    ],
  },
  {
    name: "Dining Room / Meal Area",
    number: "Three",
    items: [
      { name: "Baby High Chair", count: 0, volume_cubic_meters: 0.2 },
      { name: "Bookshelf", count: 0, volume_cubic_meters: 0.5 },
      { name: "Buffet - Large", count: 0, volume_cubic_meters: 1.2 },
      { name: "Buffet - Small", count: 0, volume_cubic_meters: 0.8 },
      { name: "Cabinet", count: 0, volume_cubic_meters: 0.9 },
      { name: "Dining Chairs", count: 0, volume_cubic_meters: 0.2 },
      { name: "Dining Table - 4 Seater", count: 0, volume_cubic_meters: 1.0 },
      { name: "Dining Table - 6 Seater", count: 0, volume_cubic_meters: 1.2 },
      { name: "Dining Table - 8+ Seater", count: 0, volume_cubic_meters: 1.5 },
    ],
  },
  {
    name: "Lounge / Family Rooms",
    number: "Four",
    items: [
      { name: "Aquarium - Large", count: 0, volume_cubic_meters: 1.0 },
      { name: "Aquarium - Small", count: 0, volume_cubic_meters: 0.5 },
      { name: "Bar", count: 0, volume_cubic_meters: 1.0 },
      { name: "Bean Bag", count: 0, volume_cubic_meters: 0.3 },
      { name: "Bookcase", count: 0, volume_cubic_meters: 0.5 },
      { name: "China Cabinet", count: 0, volume_cubic_meters: 1.0 },
      { name: "Coffee Table", count: 0, volume_cubic_meters: 0.3 },
      { name: "Desk - Corner", count: 0, volume_cubic_meters: 1.0 },
      { name: "Desk - Standard", count: 0, volume_cubic_meters: 0.8 },
      {
        name: "Entertainment Unit - Lowline",
        count: 0,
        volume_cubic_meters: 1.0,
      },
      { name: "Lamp", count: 0, volume_cubic_meters: 0.05 },
      { name: "Lounge - 2 Seater", count: 0, volume_cubic_meters: 1.2 },
      {
        name: "Lounge - 2 Seater + Chaise",
        count: 0,
        volume_cubic_meters: 1.5,
      },
      { name: "Lounge - 2.5 Seater", count: 0, volume_cubic_meters: 1.3 },
      { name: "Lounge - 3 Seater", count: 0, volume_cubic_meters: 1.5 },
      {
        name: "Lounge - 3 Seater + Chaise",
        count: 0,
        volume_cubic_meters: 1.8,
      },
      { name: "Lounge - Arm Chair", count: 0, volume_cubic_meters: 0.8 },
      { name: "Lounge - Modular", count: 0, volume_cubic_meters: 2.0 },
      { name: "Lounge - Ottoman", count: 0, volume_cubic_meters: 0.3 },
      { name: "Lounge Chair", count: 0, volume_cubic_meters: 0.6 },
      { name: "Piano - Upright", count: 0, volume_cubic_meters: 1.5 },
      { name: "Pool Table", count: 0, volume_cubic_meters: 2.0 },
      { name: "Side Table / Lamp Table", count: 0, volume_cubic_meters: 0.2 },
      { name: "Stereo & Speakers", count: 0, volume_cubic_meters: 0.5 },
      { name: "TV", count: 0, volume_cubic_meters: 0.3 },
    ],
  },
  {
    name: "Study / Home Office",
    number: "Five",
    items: [
      { name: "Bookshelf", count: 0, volume_cubic_meters: 0.5 },
      { name: "Desk", count: 0, volume_cubic_meters: 0.8 },
      { name: "Desk - Corner", count: 0, volume_cubic_meters: 1.0 },
      { name: "Filing Cabinet - 2 Drawer", count: 0, volume_cubic_meters: 0.3 },
      { name: "Filing Cabinet - 3 Drawer", count: 0, volume_cubic_meters: 0.4 },
      { name: "Filing Cabinet - 4 Drawer", count: 0, volume_cubic_meters: 0.5 },
      { name: "Office Chair", count: 0, volume_cubic_meters: 0.2 },
    ],
  },
  {
    name: "Laundry",
    number: "Six",
    items: [
      { name: "Brooms & Mops", count: 0, volume_cubic_meters: 0.1 },
      { name: "Clothes Basket", count: 0, volume_cubic_meters: 0.1 },
      { name: "Clothes Horse", count: 0, volume_cubic_meters: 0.2 },
      { name: "Cupboard", count: 0, volume_cubic_meters: 0.5 },
      { name: "Dryer", count: 0, volume_cubic_meters: 0.4 },
      { name: "Ironing Board", count: 0, volume_cubic_meters: 0.2 },
      { name: "Sewing Machine", count: 0, volume_cubic_meters: 0.1 },
      { name: "Vacuum Cleaner", count: 0, volume_cubic_meters: 0.3 },
      { name: "Washing Machine", count: 0, volume_cubic_meters: 0.5 },
    ],
  },
  {
    name: "Garden / Outdoor",
    number: "Seven",
    items: [
      { name: "Barbeque", count: 0, volume_cubic_meters: 0.6 },
      { name: "Garden Bench Seat", count: 0, volume_cubic_meters: 0.5 },
      { name: "Hanging Baskets", count: 0, volume_cubic_meters: 0.1 },
      { name: "Hose Reel", count: 0, volume_cubic_meters: 0.2 },
      {
        name: "Outdoor Chairs - Stackable",
        count: 0,
        volume_cubic_meters: 0.3,
      },
      { name: "Outdoor Dining Chairs", count: 0, volume_cubic_meters: 0.2 },
      {
        name: "Outdoor Dining Table - 4 Seater",
        count: 0,
        volume_cubic_meters: 1.0,
      },
      {
        name: "Outdoor Dining Table - 6 Seater",
        count: 0,
        volume_cubic_meters: 1.2,
      },
      {
        name: "Outdoor Dining Table - 8+ Seater",
        count: 0,
        volume_cubic_meters: 1.5,
      },
      { name: "Outdoor Heater", count: 0, volume_cubic_meters: 0.4 },
      { name: "Outdoor Lounge - 3 Seater", count: 0, volume_cubic_meters: 1.2 },
      {
        name: "Outdoor Lounge - Arm Chair",
        count: 0,
        volume_cubic_meters: 0.6,
      },
      { name: "Outdoor Lounge Table", count: 0, volume_cubic_meters: 0.5 },
      { name: "Outdoor Umbrella", count: 0, volume_cubic_meters: 0.2 },
      {
        name: "Picnic Table + 2 Bench Seats",
        count: 0,
        volume_cubic_meters: 1.5,
      },
      { name: "Pot Plants - Large", count: 0, volume_cubic_meters: 0.3 },
      { name: "Pot Plants - Small", count: 0, volume_cubic_meters: 0.1 },
      { name: "Spa", count: 0, volume_cubic_meters: 2.0 },
      { name: "Swing Set - Dismantled", count: 0, volume_cubic_meters: 0.8 },
      { name: "Trampoline - Dismantled", count: 0, volume_cubic_meters: 1.2 },
    ],
  },
  {
    name: "Garage / Shed",
    number: "Eight",
    items: [
      { name: "Bar Fridge", count: 0, volume_cubic_meters: 0.3 },
      { name: "Bicycle - Adult", count: 0, volume_cubic_meters: 0.5 },
      { name: "Bicycle - Child", count: 0, volume_cubic_meters: 0.4 },
      { name: "Chairs", count: 0, volume_cubic_meters: 0.2 },
      { name: "Esky", count: 0, volume_cubic_meters: 0.2 },
      { name: "Fridge / Freezer", count: 0, volume_cubic_meters: 0.8 },
      { name: "Garden Blower", count: 0, volume_cubic_meters: 0.2 },
      { name: "Golf Bag & Buggy", count: 0, volume_cubic_meters: 0.4 },
      { name: "Jetski", count: 0, volume_cubic_meters: 1.2 },
      { name: "Ladder", count: 0, volume_cubic_meters: 0.5 },
      { name: "Lawn Mower", count: 0, volume_cubic_meters: 0.5 },
      { name: "Step Ladder", count: 0, volume_cubic_meters: 0.3 },
      { name: "Tool Box", count: 0, volume_cubic_meters: 0.2 },
      { name: "Tool Chest", count: 0, volume_cubic_meters: 0.4 },
      { name: "Welder", count: 0, volume_cubic_meters: 0.3 },
      { name: "Wheel Barrow", count: 0, volume_cubic_meters: 0.4 },
      { name: "Whipper Snipper", count: 0, volume_cubic_meters: 0.2 },
      { name: "Work Bench", count: 0, volume_cubic_meters: 1.0 },
    ],
  },
  {
    name: "Boxes / Bags",
    number: "Nine",
    items: [
      { name: "Book Boxes", count: 0, volume_cubic_meters: 0.05 },
      { name: "Large - Approx 100 Litres", count: 0, volume_cubic_meters: 0.1 },
      {
        name: "Medium - Approx 50 Litres",
        count: 0,
        volume_cubic_meters: 0.05,
      },
      { name: "Striped Bags", count: 0, volume_cubic_meters: 0.03 },
      { name: "Suitcases", count: 0, volume_cubic_meters: 0.1 },
      { name: "Wardrobe Boxes", count: 0, volume_cubic_meters: 0.2 },
    ],
  },
  {
    name: "Hall / Entry",
    number: "Ten",
    items: [
      { name: "Carpets & Rugs", count: 0, volume_cubic_meters: 0.2 },
      { name: "Grand Father Clock", count: 0, volume_cubic_meters: 0.8 },
      { name: "Hall Stand / Table", count: 0, volume_cubic_meters: 0.4 },
      { name: "Hat Rack / Coat Rack", count: 0, volume_cubic_meters: 0.1 },
      { name: "Pictures / Mirrors", count: 0, volume_cubic_meters: 0.1 },
    ],
  },
  {
    name: "Fitness / Gym Equipment",
    number: "Eleven",
    items: [
      { name: "Bench", count: 0, volume_cubic_meters: 0.6 },
      { name: "Boxing Bag", count: 0, volume_cubic_meters: 0.3 },
      { name: "Cross Trainer", count: 0, volume_cubic_meters: 1.0 },
      { name: "Exercise Bike", count: 0, volume_cubic_meters: 0.8 },
      {
        name: "Multi Station Gym - Partly Dismantled",
        count: 0,
        volume_cubic_meters: 1.5,
      },
      { name: "Treadmill", count: 0, volume_cubic_meters: 1.0 },
      { name: "Weight Bench", count: 0, volume_cubic_meters: 0.7 },
    ],
  },
];

console.log(rooms);
const MovingContent = () => {
  const [propertyType, setPropertyType] = useState(propertyTypeOptions[0]);
  const [serviceLevel, setServiceLevel] = useState(serviceLevelOptions[0]);
  const [moveTime, setMoveTime] = useState(moveOptions[0]);
  const [on, setOn] = useState(new Date());
  const [onBefore, setOnBefore] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [visible, setVisible] = useState(false);

  const [roomItems, setRoomItems] = useState(rooms);

  const incrementCount = (roomIndex, itemIndex) => {
    const newRoomItems = [...roomItems];
    newRoomItems[roomIndex].items[itemIndex].count += 1;
    setRoomItems(newRoomItems);
  };

  const decrementCount = (roomIndex, itemIndex) => {
    const newRoomItems = [...roomItems];
    if (newRoomItems[roomIndex].items[itemIndex].count > 0) {
      newRoomItems[roomIndex].items[itemIndex].count -= 1;
    }
    setRoomItems(newRoomItems);
  };

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
                    <Accordian
                      rooms={rooms}
                      incrementCount={incrementCount}
                      decrementCount={decrementCount}
                    />
                    <div
                      className={cn(
                        "button-stroke button-small",
                        styles.button
                      )}
                      onClick={() => setVisible(true)}
                    >
                      Add additional items
                    </div>
                    <Modal visible={visible} onClose={() => setVisible(false)}>
                      <div className={styles.item}>
                        <div className={styles.fieldset}>
                          <div className={styles.row}>
                            <div className={cn(styles.col, styles.w50)}>
                              <div className={styles.label}>Item name</div>
                              <div className={styles.line}>
                                <div className={styles.cell}>
                                  <TextInput
                                    className={styles.field}
                                    name="discount"
                                    type="text"
                                    placeholder="e.g. Cardboard"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={cn(styles.col, styles.w50)}>
                              <div className={styles.label}>Item quantity</div>
                              <div className={styles.line}>
                                <div className={styles.cell}>
                                  <TextInput
                                    className={styles.field}
                                    name="discount"
                                    type="text"
                                    placeholder="e.g. 1"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.label}>{}</div>
                        <div className={styles.label}>Dimensions</div>
                        <div className={styles.line}>
                          <div className={styles.cell}>
                            <TextInput
                              className={styles.field}
                              name="discount"
                              type="text"
                              placeholder="Height in metres"
                              required
                            />
                          </div>
                        </div>
                        <div className={styles.label}>{}</div>
                        <div className={styles.line}>
                          <div className={styles.cell}>
                            <TextInput
                              className={styles.field}
                              name="discount"
                              type="text"
                              placeholder="Width in metres"
                              required
                            />
                          </div>
                        </div>
                        <div className={styles.label}>{}</div>
                        <div className={styles.line}>
                          <div className={styles.cell}>
                            <TextInput
                              className={styles.field}
                              name="discount"
                              type="text"
                              placeholder="Length in metres"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.row}>
                        <div className={cn(styles.col, styles.w70)}>
                          <div className={styles.label}>Weight</div>
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
                              {/* <Dropdown
                                className={styles.dropdown}
                                value={currency}
                                setValue={setCurrency}
                                options={currencyOptions}
                                empty
                              /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="btn btn-base">Add Item</div>
                    </Modal>
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
                        <div className={cn(styles.col, styles.w50)}>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <DateSingle startDate={on} setStartDate={setOn} />
                            </div>
                          </div>
                        </div>
                      )}
                      {moveTime === "Between" && (
                        <div className={cn(styles.col, styles.w50)}>
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
                        <div className={cn(styles.col, styles.w50)}>
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
                  <div className="btn btn-base">Continue</div>
                </div>
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

export default MovingContent;
