import React, { useState } from "react";
import GlobexSubHeading from "../../elements/GlobexText/GlobexSubHeading/GlobexSubHeading";
import GlobexFilter from "../../elements/GlobexFilter/GlobexFilter";
import styles from "./GlobexProductFilters.module.scss";
import { IoIosSearch } from "react-icons/io";
import GlobexCheckbox from "../../elements/GlobexCheckbox/GlobexCheckbox";
import GlobexHeading3 from "../../elements/GlobexText/GlobexHeading3/GlobexHeading3";
import { brands } from "../../../constants/brandData";
import { prices } from "../../../constants/priceData";
import { discount } from "../../../constants/discountData";

interface ProductFilterProps {
  onClick: VoidFunction;
  checked?: boolean;
  value?: any;
  setValue?: any;
}

const GlobexProductFilters = ({
  onClick,
  checked,
  setValue,
  value,
}: ProductFilterProps) => {
  const [brandTag, setBrandTag] = useState(true);
  const [priceTag, setPriceTag] = useState(true);
  const [discountTag, setDiscountTag] = useState(true);
  const [all, setAll] = useState(true);
  const removeBrandProducts = (item: string) => {
    // const filteredItem = images.filter((product) => {
    //   return product.brand !== item;
    // });
    setValue((prev: any[]) => {
      return prev.filter((product: { brand: string }) => {
        return product.brand !== item;
      });
    });
  };
  

  const addBrandProduct = (item: string) => {};

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.heading}>
          <GlobexSubHeading subHeading="Filters" />
          <span
            onClick={() => {
            }}
          >
          {brandTag == false && priceTag ==  false && discountTag == false ? 'Show All': 'Clear All'}
          </span>
        </div>
        <div className={styles.tags}>
          {brandTag && (
            <GlobexFilter
              tag="Brand"
              onClick={() => {
                setBrandTag(!brandTag);
              }}
            />
          )}
          {priceTag && (
            <GlobexFilter
              tag="Price"
              onClick={() => {
                setPriceTag(!priceTag);
              }}
            />
          )}
          {discountTag && (
            <GlobexFilter
              tag="Discounts"
              onClick={() => {
                setDiscountTag(!discountTag);
              }}
            />
          )}
        </div>
      </div>
      <hr />
      {brandTag && (
        <div className={styles.section}>
          <div className={styles.heading}>
            <GlobexHeading3 heading3="Brand" />
            <span>
              <IoIosSearch />
            </span>
          </div>
          <div className={styles.checkboxes}>
            {brands.map((brand) => {
              return (
                <GlobexCheckbox
                  key={brand.id}
                  tag={brand.name}
                  number={brand.number}
                  onUncheck={() => {
                    removeBrandProducts(brand.name);
                  }}
                  onCheck={() => {
                    addBrandProduct(brand.name);
                  }}
                />
              );
            })}
            <p className={styles.blueText}>+40 more</p>
          </div>
        </div>
      )}

      <hr />
      {priceTag && (
        <div className={styles.section}>
          <div className={styles.heading}>
            <GlobexHeading3 heading3="Price" />
          </div>
          <div className={styles.checkboxes}>
            {prices.map((price) => {
              return (
                <GlobexCheckbox
                  key={price.id}
                  tag={price.range}
                  number={price.number}
                  onCheck={onClick}
                  onUncheck={onClick}
                  checked={checked}
                />
              );
            })}
          </div>
        </div>
      )}

      <hr />
      {discountTag && (
        <div className={styles.section}>
          <div className={styles.heading}>
            <GlobexHeading3 heading3="Discount Range" />
          </div>
          <div className={styles.checkboxes}>
            {discount.map((discount) => {
              return (
                <GlobexCheckbox
                  key={discount.id}
                  tag={discount.range}
                  number={discount.number}
                  onCheck={onClick}
                  onUncheck={onClick}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobexProductFilters;
