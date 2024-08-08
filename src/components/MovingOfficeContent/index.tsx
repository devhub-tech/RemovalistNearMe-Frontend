import React, { useState } from "react";
import cn from "classnames";
import styles from "./MovingOfficeContent.module.sass";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import Checkbox from "../Checkbox";
import DateSingle from "../DateSingle/DateSingle";
import DateRange from "../DateRange/DateRange";
import Accordian from "../Accordian/Accordian";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { QuotePayload } from "../../constants/types/quote";
import { createQuoteAction } from "../../redux/actions/quoteAction/createQuoteAction";
import {
  FaArrowRight,
  FaCalculator,
  FaFileAlt,
  FaPencilAlt,
  FaRegEnvelope,
} from "react-icons/fa";

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
    room_type: {
      name: "Office",
    },
    inventory_items: [
      {
        item: {
          name: "Boardroom Table - 10+ Seater",
          volume_cubic_meters: "3.00",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Boardroom Table - 4 Seater",
          volume_cubic_meters: "1.50",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Boardroom Table - 6 Seater",
          volume_cubic_meters: "2.00",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Boardroom Table - 8 Seater",
          volume_cubic_meters: "2.50",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Bookshelf",
          volume_cubic_meters: "0.80",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Corner Desk",
          volume_cubic_meters: "1.20",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Desk - 2 Seater",
          volume_cubic_meters: "1.50",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Desk - Corner",
          volume_cubic_meters: "1.20",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Desk - Single Seater",
          volume_cubic_meters: "1.00",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Executive Office Chair",
          volume_cubic_meters: "0.40",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Filing Cabinet - 2 Drawer",
          volume_cubic_meters: "0.50",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Filing Cabinet - 3 Drawer",
          volume_cubic_meters: "0.70",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Filing Cabinet - 4 Drawer",
          volume_cubic_meters: "0.90",
        },
        quantity: 0,
        total_volume: 0,
      },
      {
        item: {
          name: "Whiteboard",
          volume_cubic_meters: "0.30",
        },
        quantity: 0,
        total_volume: 0,
      },
    ],
  },
  {
    room_type: {
      name: "Additional Items",
    },
    inventory_items: [],
  },
];

const MovingOfficeContent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = JSON.parse(localStorage.getItem("user")!);
  const [pickUpAdd, setPickUpAdd] = useState("");
  const [pickUpType, setPickUpType] = useState(propertyTypeOptions[0]);
  const [pickUpOptional, setPickUpOptional] = useState("");
  const [dropOffAdd, setDropOffAdd] = useState("");
  const [dropOffType, setDropOffType] = useState(propertyTypeOptions[0]);
  const [dropOffOptional, setDropOffOptional] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
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
    const item = newRoomItems[roomIndex].inventory_items[itemIndex];
    item.quantity += 1;
    item.total_volume =
      item.quantity * parseFloat(item.item.volume_cubic_meters); // Update total_volume
    setRoomItems(newRoomItems);
  };

  const decrementCount = (roomIndex, itemIndex) => {
    const newRoomItems = [...roomItems];
    const item = newRoomItems[roomIndex].inventory_items[itemIndex];
    if (item.quantity > 0) {
      item.quantity -= 1;
      item.total_volume =
        item.quantity * parseFloat(item.item.volume_cubic_meters); // Update total_volume
    }
    setRoomItems(newRoomItems);
  };

  console.log(pickUpType, moveTime);

  function createQuoteHandler(evt: any) {
    evt.preventDefault();
    let date_1: string | null = null;
    let date_2: string | null = null;

    let when: string = "";

    if (moveTime === "On") {
      when = "on_date";
      date_1 = on.toISOString().split("T")[0];
      date_2 = null;
    } else if (moveTime === "Urgent") {
      when = "urgent";
      date_1 = null;
      date_2 = null;
    } else if (moveTime === "On or before") {
      when = "on_or_before";
      date_1 = onBefore.toISOString().split("T")[0];
      date_2 = null;
    } else {
      when = "between_dates";
      date_1 = null;
      date_2 = null;
    }

    const payload: QuotePayload = {
      additional_items: [],
      date_1: date_1,
      date_2: date_2,
      dropoff_address: dropOffAdd,
      dropoff_address_property_type: dropOffType,
      email: user.email,
      level_of_service: serviceLevel.toUpperCase(),
      pickup_address: pickUpAdd,
      pickup_address_property_type: pickUpType,
      rooms: rooms,
      user: user.id,
      when_type: when,
      additional_services: "",
      other_details: otherDetails,
    };
    dispatch(createQuoteAction(payload));
  }

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
                      <div className="row">
                        <div className="col-md-6">
                          <div className="single-input-inner">
                            <label>
                              <FaRegEnvelope />
                            </label>
                            <input
                              value={pickUpAdd}
                              onChange={(e) => setPickUpAdd(e.target.value)}
                              type="text"
                              placeholder="Pick-up address or suburb"
                              name="pickUpAddress"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-select-inner">
                            <label>
                              <FaFileAlt />
                            </label>
                            <select
                              value={pickUpType}
                              name="pickUpType"
                              onChange={(e) => setPickUpType(e.target.value)}
                              className="single-select"
                            >
                              {propertyTypeOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.label}>{}</div>
                    <div className="col-12">
                      <div className="single-input-inner">
                        <label>
                          <FaPencilAlt />
                        </label>
                        <textarea
                          placeholder="Please describe access/parking restrictions (optional).."
                          value={pickUpOptional}
                          onChange={(e) => setPickUpOptional(e.target.value)}
                          name="pickUpOptional"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Pick Up details */}

                  {/* Drop off details */}
                  <div className={styles.item}>
                    <div className={styles.category}> Drop-off Details</div>
                    <div className={styles.fieldset}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="single-input-inner">
                            <label>
                              <FaRegEnvelope />
                            </label>
                            <input
                              type="text"
                              placeholder="Drop-off address or suburb"
                              name="dropOffAddress"
                              value={dropOffAdd}
                              onChange={(e) => setDropOffAdd(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-select-inner">
                            <label>
                              <FaFileAlt />
                            </label>
                            <select
                              value={dropOffType}
                              onChange={(e) => setDropOffType(e.target.value)}
                              className="single-select"
                              name="dropOffType"
                            >
                              {propertyTypeOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.label}>{}</div>
                    <div className="col-12">
                      <div className="single-input-inner">
                        <label>
                          <FaPencilAlt />
                        </label>
                        <textarea
                          placeholder="Please describe access/parking restrictions (optional).."
                          value={dropOffOptional}
                          onChange={(e) => setDropOffOptional(e.target.value)}
                          name="dropOffOptional"
                        />
                      </div>
                    </div>
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
                    <div className="tag-and-share">
                      <div className="row">
                        <div className="col-4">
                          <div className="tags d-inline-block">
                            <a href="#">Add additional items</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Modal visible={visible} onClose={() => setVisible(false)}>
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
                  {/* </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn btn-base">Add Item</div>
                  </Modal> */}

                  <div className={styles.item}>
                    <div className={styles.category}>When</div>
                    <div className={styles.label}>
                      When do you need to move?
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-select-inner">
                          <label>
                            <FaFileAlt />
                          </label>
                          <select
                            value={moveTime}
                            onChange={(e) => setMoveTime(e.target.value)}
                            className="single-select"
                            name="moveTime"
                          >
                            {moveOptions.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
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
                    <div className={styles.category}>Other Details</div>
                    <div className="col-12">
                      <div className="single-input-inner">
                        <label>
                          <FaPencilAlt />
                        </label>
                        <textarea
                          placeholder="Any other important details"
                          value={otherDetails}
                          onChange={(e) => setOtherDetails(e.target.value)}
                          name="otherDetails"
                        />
                      </div>
                    </div>
                  </div>
                  <div onClick={createQuoteHandler} className="btn btn-base">
                    Continue
                  </div>
                </div>
              </form>
            </div>

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

export default MovingOfficeContent;
