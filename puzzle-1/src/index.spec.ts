import { isActiveMonth } from './index';

describe('isActiveMonth', () => {
  it('month is not active if there is no start or end date', () => {
    let isMonthActive = isActiveMonth(3, 2020);
    expect(isMonthActive).toBeNull();
  });

  it('start set: month is not active if year is different', () => {
    const start = new Date(2020, 3);
    let isMonthActive = isActiveMonth(3, 2019, start);
    expect(isMonthActive).toBeNull();
  });

  it('start set: month is not active if month is different', () => {
    const start = new Date(2020, 3);
    let isMonthActive = isActiveMonth(4, 2020, start);
    expect(isMonthActive).toBeNull();
  });

  it('start set: month should be active', () => {
    const start = new Date(2020, 3);
    let isMonthActive = isActiveMonth(3, 2020, start);
    expect(isMonthActive).toBe(true);
  });

  it('start set: month should be in-active', () => {
    const start = new Date(2020, 3);
    let isMonthActive = isActiveMonth(4, 2019, start);
    expect(isMonthActive).toBeNull();
  });

  it('end set: month is not active if year is different', () => {
    const end = new Date(2020, 3);
    let isMonthActive = isActiveMonth(3, 2019, null, end);
    expect(isMonthActive).toBe(false);
  });

  it('end set: month is not active if month is different', () => {
    const end = new Date(2020, 3);
    let isMonthActive = isActiveMonth(4, 2020, null, end);
    expect(isMonthActive).toBe(false);
  });

  it('end set: month should be active', () => {
    const end = new Date(2020, 3);
    let isMonthActive = isActiveMonth(3, 2020, null, end);
    expect(isMonthActive).toBe(true);
  });

  it('end set: month should be in-active', () => {
    const end = new Date(2020, 3);
    let isMonthActive = isActiveMonth(4, 2019, null, end);
    expect(isMonthActive).toBe(false);
  });
});
