declare namespace NodeJS {
  interface Global {
      addEventListener: jest.Mock<Function>;
      removeEventListener: jest.Mock<Function>;
      getSelection(): {
          removeAllRanges: jest.Mock<Function>;
      };
  }
}

declare namespace Intl {
  type PartTypeType =
      | 'currency'
      | 'decimal'
      | 'fraction'
      | 'group'
      | 'infinity'
      | 'integer'
      | 'literal'
      | 'minusSign'
      | 'nan'
      | 'plusSign'
      | 'percentSign';

  type PartType = {
      type: PartTypeType;
      value: string;
  };

  interface NumberFormat {
      formatToParts(value: number): Array<PartType>;
  }
}
