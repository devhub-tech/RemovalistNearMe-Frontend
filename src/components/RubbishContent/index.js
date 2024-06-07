import React, { useState } from "react";
import cn from "classnames";
import styles from "./RubbishContent.module.sass";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import DateSingle from "../DateSingle/DateSingle";
import DateRange from "../DateRange/DateRange";

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

const rooms = [{ name: "Additional Items", number: "Twelve", items: [] }];

console.log(rooms);
const RubbishContent = () => {
  const [propertyType, setPropertyType] = useState(propertyTypeOptions[0]);
  const [moveTime, setMoveTime] = useState(moveOptions[0]);
  const [on, setOn] = useState(new Date());
  const [onBefore, setOnBefore] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

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

                  <div className={styles.item}>
                    <div className={styles.category}>When</div>
                    <div className={styles.label}>
                      When do you need to move?
                    </div>
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w50)}>
                        <Dropdown
                          className={styles.dropdown}
                          value={moveTime}
                          setValue={setMoveTime}
                          options={moveOptions}
                        />
                      </div>
                      {moveTime === "On" && (
                        <div className={cn(styles.col, styles.w70)}>
                          <div className={styles.line}>
                            <div className={styles.cell}>
                              <DateSingle startDate={on} setStartDate={setOn} />
                            </div>
                          </div>
                        </div>
                      )}
                      {moveTime === "Between" && (
                        <div className={cn(styles.col, styles.w70)}>
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
                        <div className={cn(styles.col, styles.w70)}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default RubbishContent;
