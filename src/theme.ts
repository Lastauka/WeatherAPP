
export interface Theme {
  appTitleColor: string;
  backgroundGradient: {
    color1: string;
    color2: string;
  };
  panelBgColor: string;
  panelTitleColor: string;
  searchInput: {
    color: string;
    placeholderColor: string;
  };
  temperatureSwitch: {
    backgroundColor: string;
    sliderColor: string;
    textColor: string;
  };
  searchSuggestion: {
    backgroundColor: string;
    hoverBackgroundColor: string;
    seperatorLineColor: string;
  };
  smallIconColor: string;
  smallIconTextColor: string;
}

export const theme: Theme = {
  appTitleColor: '#2F5D8A',
  backgroundGradient: {
    color1: '#F9FFFF',
    color2: '#38C8E6',
  },
  panelBgColor: '#FFFFFF',
  panelTitleColor: '#727E8E',
  searchInput: {
    color: '#727E8E',
    placeholderColor: '#6898d5',
  },
  temperatureSwitch: {
    backgroundColor: '#77b1c7',
    sliderColor: '#fff',
    textColor: '#fff',
  },
  searchSuggestion: {
    backgroundColor: '#fff',
    hoverBackgroundColor: '#f9f9f9',
    seperatorLineColor: '#ccc',
  },
  smallIconColor: '#A1B9CE',
  smallIconTextColor: '#7B98B2',
};
