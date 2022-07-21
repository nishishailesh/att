import React from "react";
import { useDispatch } from "react-redux";
import { FILTER_MEET_NUMBER } from "../../redux/filterSlice";

function FilterMeetNumber() {
  const dispatch = useDispatch();

  return (
    <div className="w-full px-3 py-2 flex flex-row items-center gap-x-2">
      <label htmlFor="" className="w-max px-5 text-primary-grey dark:text-white text-sm">
      Select Meeting
      </label>
      <select
        defaultValue={"1"}
        name="filter"
        onChange={(e) => {
          dispatch(FILTER_MEET_NUMBER(e.target.value));
        }}
        className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={"1"}>Meeting 1</option>
        <option value={"2"}>Meeting 2</option>
        <option value={"3"}>Meeting 3</option>
        <option value={"4"}>Meeting 4</option>
        <option value={"5"}>Meeting 5</option>
        <option value={"6"}>Meeting 6</option>
        <option value={"7"}>Meeting 7</option>
        <option value={"8"}>Meeting 8</option>
        <option value={"9"}>Meeting 9</option>
        <option value={"10"}>Meeting 10</option>
        <option value={"11"}>Meeting 11</option>
        <option value={"12"}>Meeting 12</option>
        <option value={"13"}>Meeting 13</option>
        <option value={"14"}>Meeting 14</option>
        <option value={"15"}>Meeting 15</option>
        <option value={"16"}>Meeting 16</option>
        <option value={"17"}>Meeting 17</option>
        <option value={"18"}>Meeting 18</option>
        <option value={"19"}>Meeting 19</option>
        <option value={"20"}>Meeting 20</option>
        <option value={"21"}>Meeting 21</option>
        <option value={"22"}>Meeting 22</option>
        <option value={"23"}>Meeting 23</option>
        <option value={"24"}>Meeting 24</option>
        <option value={"25"}>Meeting 25</option>
        <option value={"26"}>Meeting 26</option>
        <option value={"27"}>Meeting 27</option>
        <option value={"28"}>Meeting 28</option>
        <option value={"29"}>Meeting 29</option>
        <option value={"30"}>Meeting 30</option>
        <option value={"31"}>Meeting 31</option>
        <option value={"32"}>Meeting 32</option>
        <option value={"33"}>Meeting 33</option>
        <option value={"34"}>Meeting 34</option>
        <option value={"35"}>Meeting 35</option>
        <option value={"36"}>Meeting 36</option>
        <option value={"37"}>Meeting 37</option>
        <option value={"38"}>Meeting 38</option>
        <option value={"39"}>Meeting 39</option>
        <option value={"40"}>Meeting 40</option>
        <option value={"41"}>Meeting 41</option>
        <option value={"42"}>Meeting 42</option>
        <option value={"43"}>Meeting 43</option>
        <option value={"44"}>Meeting 44</option>
        <option value={"45"}>Meeting 45</option>
        <option value={"46"}>Meeting 46</option>
        <option value={"47"}>Meeting 47</option>
        <option value={"48"}>Meeting 48</option>
        <option value={"49"}>Meeting 49</option>
        <option value={"50"}>Meeting 50</option>
        <option value={"51"}>Meeting 51</option>
        <option value={"52"}>Meeting 52</option>
        <option value={"53"}>Meeting 53</option>
        <option value={"54"}>Meeting 54</option>
        <option value={"55"}>Meeting 55</option>
        <option value={"56"}>Meeting 56</option>
        <option value={"57"}>Meeting 57</option>
        <option value={"58"}>Meeting 58</option>
        <option value={"59"}>Meeting 59</option>
        <option value={"60"}>Meeting 60</option>
      </select>
    </div>
  );
}

export default FilterMeetNumber;
